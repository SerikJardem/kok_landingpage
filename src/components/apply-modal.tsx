"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useMemo, useState } from "react";
import { useApply } from "@/components/apply-context";
import { Stamp } from "@/components/brand";
import { quiz } from "@/lib/content";
import { fetchSheetLocations } from "@/lib/location-parse";
import { googleSheetsCsvUrl } from "@/lib/public-config";
import { submitFranchiseApplication } from "@/lib/telegram";
import type { BudgetBand, ExperienceLevel, FranchiseLocation } from "@/lib/types";

const EXPERIENCE: ExperienceLevel[] = ["yes", "no", "partial"];
const BUDGETS: BudgetBand[] = ["under25", "25to50", "50to80", "over80"];

type Status = "idle" | "submitting" | "success" | "queued" | "error";

export function ApplyModal({ cities }: { cities: FranchiseLocation[] }) {
  const { open, city, session, closeApply } = useApply();
  const titleId = useId();
  const [liveCities, setLiveCities] = useState(cities);
  const cityOptions = useMemo(
    () => Array.from(new Set(liveCities.map((item) => item.city))),
    [liveCities],
  );

  useEffect(() => {
    let cancelled = false;
    const sheetUrl = googleSheetsCsvUrl();
    if (!sheetUrl) {
      return;
    }
    fetchSheetLocations(sheetUrl).then((payload) => {
      if (!cancelled && payload && payload.locations.length > 0) {
        setLiveCities(payload.locations);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeApply();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeApply]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-ink/55 p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Закрыть"
            onClick={closeApply}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative max-h-[92svh] w-full max-w-lg overflow-y-auto border-2 border-ink bg-cream p-6 shadow-[10px_12px_0_#2A2A2A] sm:p-8"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <Stamp className="text-terra">QUIZ</Stamp>
                <h2 id={titleId} className="mt-3 font-display text-2xl font-black text-ink">
                  {quiz.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeApply}
                className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-ink"
              >
                {quiz.close}
              </button>
            </div>
            <QuizForm key={session} initialCity={city} cityOptions={cityOptions} />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function QuizForm({
  initialCity,
  cityOptions,
}: {
  initialCity: string;
  cityOptions: string[];
}) {
  const known = Boolean(initialCity) && cityOptions.includes(initialCity);
  const [step, setStep] = useState(0);
  const [other, setOther] = useState(Boolean(initialCity) && !known);
  const [form, setForm] = useState({
    city: initialCity,
    experience: "" as ExperienceLevel | "",
    budget: "" as BudgetBand | "",
    name: "",
    contact: "",
    company: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function submit() {
    setStatus("submitting");
    setError("");
    try {
      const json = await submitFranchiseApplication({
        city: form.city,
        experience: form.experience,
        budget: form.budget,
        name: form.name,
        contact: form.contact,
        company: form.company,
      });
      if (!json.ok) {
        setStatus("error");
        setError(json.error || quiz.error);
        return;
      }
      setStatus(json.delivered ? "success" : "queued");
    } catch {
      setStatus("error");
      setError(quiz.error);
    }
  }

  const canNext =
    (step === 0 && form.city.trim().length >= 2) ||
    (step === 1 && Boolean(form.experience)) ||
    (step === 2 && Boolean(form.budget)) ||
    (step === 3 && form.name.trim().length >= 2 && form.contact.trim().length >= 3);

  if (status === "success" || status === "queued") {
    return (
      <div className="mt-8">
        <p className="font-display text-3xl font-black text-ink">
          {status === "success" ? quiz.successTitle : quiz.queuedTitle}
        </p>
        <p className="mt-4 text-ink/80">
          {status === "success" ? quiz.successBody : quiz.queuedBody}
        </p>
      </div>
    );
  }

  return (
    <>
      <ol className="mt-6 flex gap-2">
        {quiz.steps.map((label, index) => (
          <li key={label} className={`h-1.5 flex-1 ${index <= step ? "bg-leaf" : "bg-leaf/20"}`} />
        ))}
      </ol>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/60">
        {step + 1} / 4 · {quiz.steps[step]}
      </p>

      <div className="mt-6">
        {step === 0 ? (
          <fieldset>
            <legend className="mb-4 font-display text-lg font-bold text-ink">
              {quiz.cityLabel}
            </legend>
            <div className="grid grid-cols-2 gap-2">
              {cityOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setOther(false);
                    setForm((current) => ({ ...current, city: option }));
                  }}
                  className={`border-2 px-3 py-2 text-left text-sm ${
                    form.city === option && !other
                      ? "border-ochre bg-ochre text-ink"
                      : "border-leaf/35 bg-cream text-ink"
                  }`}
                >
                  {option}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOther(true);
                  setForm((current) => ({ ...current, city: "" }));
                }}
                className={`border-2 px-3 py-2 text-left text-sm ${
                  other ? "border-ochre bg-ochre text-ink" : "border-leaf/35 text-ink"
                }`}
              >
                {quiz.cityOther}
              </button>
            </div>
            {other ? (
              <input
                className="mt-3 w-full border-2 border-ink bg-cream px-3 py-2 outline-none"
                placeholder={quiz.cityPlaceholder}
                value={form.city}
                onChange={(event) =>
                  setForm((current) => ({ ...current, city: event.target.value }))
                }
              />
            ) : null}
          </fieldset>
        ) : null}

        {step === 1 ? (
          <fieldset>
            <legend className="mb-4 font-display text-lg font-bold text-ink">
              {quiz.experienceLabel}
            </legend>
            <div className="grid gap-2">
              {EXPERIENCE.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setForm((current) => ({ ...current, experience: value }))}
                  className={`border-2 px-4 py-3 text-left font-display text-sm font-bold uppercase tracking-[0.12em] ${
                    form.experience === value
                      ? "border-ochre bg-ochre text-ink"
                      : "border-leaf/35 text-ink"
                  }`}
                >
                  {quiz.experience[value]}
                </button>
              ))}
            </div>
          </fieldset>
        ) : null}

        {step === 2 ? (
          <fieldset>
            <legend className="mb-4 font-display text-lg font-bold text-ink">
              {quiz.budgetLabel}
            </legend>
            <div className="grid gap-2">
              {BUDGETS.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setForm((current) => ({ ...current, budget: value }))}
                  className={`border-2 px-4 py-3 text-left font-mono text-sm ${
                    form.budget === value
                      ? "border-ochre bg-ochre text-ink"
                      : "border-leaf/35 text-ink"
                  }`}
                >
                  {quiz.budget[value]}
                </button>
              ))}
            </div>
          </fieldset>
        ) : null}

        {step === 3 ? (
          <fieldset className="grid gap-4">
            <legend className="mb-2 font-display text-lg font-bold text-ink">Контакт</legend>
            <label className="grid gap-1 text-sm">
              {quiz.nameLabel}
              <input
                className="border-2 border-ink bg-cream px-3 py-2 outline-none"
                value={form.name}
                onChange={(event) =>
                  setForm((current) => ({ ...current, name: event.target.value }))
                }
              />
            </label>
            <label className="grid gap-1 text-sm">
              {quiz.contactLabel}
              <input
                className="border-2 border-ink bg-cream px-3 py-2 outline-none"
                placeholder={quiz.contactPlaceholder}
                value={form.contact}
                onChange={(event) =>
                  setForm((current) => ({ ...current, contact: event.target.value }))
                }
              />
            </label>
            <input
              tabIndex={-1}
              autoComplete="off"
              className="absolute left-[-9999px] opacity-0"
              value={form.company}
              onChange={(event) =>
                setForm((current) => ({ ...current, company: event.target.value }))
              }
              aria-hidden
            />
          </fieldset>
        ) : null}
      </div>

      {error ? <p className="mt-4 text-sm text-terra">{error}</p> : null}

      <div className="mt-8 flex items-center justify-between gap-3">
        <button
          type="button"
          className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-ink disabled:opacity-30"
          onClick={() => setStep((value) => Math.max(0, value - 1))}
          disabled={step === 0 || status === "submitting"}
        >
          {quiz.back}
        </button>
        {step < 3 ? (
          <button
            type="button"
            disabled={!canNext}
            onClick={() => setStep((value) => value + 1)}
            className="bg-leaf px-5 py-3 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-cream transition hover:bg-ink disabled:opacity-40"
          >
            {quiz.next}
          </button>
        ) : (
          <button
            type="button"
            disabled={!canNext || status === "submitting"}
            onClick={submit}
            className="bg-leaf px-5 py-3 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-cream transition hover:bg-ink disabled:opacity-40"
          >
            {status === "submitting" ? "…" : quiz.submit}
          </button>
        )}
      </div>
    </>
  );
}
