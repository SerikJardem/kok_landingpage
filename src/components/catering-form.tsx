"use client";

import { useMemo, useState, type FormEvent } from "react";
import { catering } from "@/lib/content";
import { submitCateringRequest } from "@/lib/telegram";
import type { CateringHeadcount, CateringNeed } from "@/lib/types";

const NEEDS: CateringNeed[] = ["food", "drinks", "both"];
const HEADCOUNTS: CateringHeadcount[] = ["50", "100", "200plus"];

type Status = "idle" | "submitting" | "success" | "queued" | "error";

function minEventDate() {
  const date = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function CateringForm({ compact = false }: { compact?: boolean }) {
  const minDate = useMemo(() => minEventDate(), []);
  const pad = compact ? "p-4 sm:p-5" : "p-6 sm:p-8";
  const gap = compact ? "mt-4" : "mt-6";
  const fieldGap = compact ? "mt-3 gap-3" : "mt-4 gap-4";
  const legend = compact
    ? "mb-2 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-forest"
    : "mb-3 font-display text-sm font-bold uppercase tracking-[0.14em] text-forest";
  const choicePad = compact ? "px-2 py-2" : "px-3 py-3";
  const inputPad = compact ? "px-2.5 py-1.5 text-sm" : "px-3 py-2";
  const noteRows = compact ? 2 : 3;
  const [form, setForm] = useState({
    need: "" as CateringNeed | "",
    headcount: "" as CateringHeadcount | "",
    eventDate: "",
    eventTime: "",
    city: "",
    venue: "",
    organization: "",
    name: "",
    contact: "",
    notes: "",
    company: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const canSubmit =
    Boolean(form.need) &&
    Boolean(form.headcount) &&
    form.eventDate.length === 10 &&
    form.city.trim().length >= 2 &&
    form.venue.trim().length >= 3 &&
    form.name.trim().length >= 2 &&
    form.contact.trim().length >= 3;

  async function submit(event: FormEvent) {
    event.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const result = await submitCateringRequest(form);
      if (!result.ok) {
        setStatus("error");
        setError(result.error || catering.error);
        return;
      }
      setStatus(result.delivered ? "success" : "queued");
    } catch {
      setStatus("error");
      setError(catering.error);
    }
  }

  if (status === "success" || status === "queued") {
    return (
      <div className={`border-2 border-forest bg-cream ${pad}`}>
        <p className="font-display text-2xl font-black text-forest sm:text-3xl">
          {status === "success" ? catering.successTitle : catering.queuedTitle}
        </p>
        <p className="mt-3 text-sm text-ink/80 sm:text-base">
          {status === "success" ? catering.successBody : catering.queuedBody}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className={`relative min-w-0 overflow-hidden border-2 border-forest bg-cream shadow-[8px_10px_0_#2f3a25] ${pad}`}
    >
      <h2 className="font-display text-xl font-black text-forest sm:text-2xl">
        {catering.formTitle}
      </h2>
      <p className="mt-1 text-xs text-ink/70 sm:text-sm">{catering.formDeck}</p>

      <fieldset className={compact ? "mt-5" : "mt-8"}>
        <legend className={legend}>{catering.needLabel}</legend>
        <div className="grid grid-cols-3 gap-1.5">
          {NEEDS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setForm((current) => ({ ...current, need: value }))}
              className={`border-2 text-left font-display text-[10px] font-bold uppercase tracking-[0.1em] sm:text-[11px] ${choicePad} ${
                form.need === value
                  ? "border-forest bg-forest text-cream"
                  : "border-forest/30 text-forest"
              }`}
            >
              {catering.need[value]}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className={gap}>
        <legend className={legend}>{catering.headcountLabel}</legend>
        <div className="grid grid-cols-3 gap-1.5">
          {HEADCOUNTS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() =>
                setForm((current) => ({ ...current, headcount: value }))
              }
              className={`border-2 text-left font-mono text-xs sm:text-sm ${choicePad} ${
                form.headcount === value
                  ? "border-forest bg-ochre text-forest"
                  : "border-forest/30 text-forest"
              }`}
            >
              {catering.headcount[value]}
            </button>
          ))}
        </div>
      </fieldset>

      <div className={`${gap} grid min-w-0 gap-3 sm:grid-cols-2`}>
        <label className="grid min-w-0 gap-1 text-xs sm:text-sm">
          {catering.dateLabel}
          <input
            type="date"
            required
            min={minDate}
            className={`w-full min-w-0 border-2 border-forest bg-cream outline-none ${inputPad}`}
            value={form.eventDate}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                eventDate: event.target.value,
              }))
            }
          />
        </label>
        <label className="grid min-w-0 gap-1 text-xs sm:text-sm">
          {catering.timeLabel}
          <input
            type="time"
            className={`w-full min-w-0 border-2 border-forest bg-cream outline-none ${inputPad}`}
            value={form.eventTime}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                eventTime: event.target.value,
              }))
            }
          />
        </label>
      </div>

      <div className={`grid ${fieldGap}`}>
        <label className="grid gap-1 text-xs sm:text-sm">
          {catering.cityLabel}
          <input
            required
            className={`border-2 border-forest bg-cream outline-none ${inputPad}`}
            value={form.city}
            onChange={(event) =>
              setForm((current) => ({ ...current, city: event.target.value }))
            }
          />
        </label>
        <label className="grid gap-1 text-xs sm:text-sm">
          {catering.venueLabel}
          <input
            required
            className={`border-2 border-forest bg-cream outline-none ${inputPad}`}
            value={form.venue}
            onChange={(event) =>
              setForm((current) => ({ ...current, venue: event.target.value }))
            }
          />
        </label>
        <label className="grid gap-1 text-xs sm:text-sm">
          {catering.organizationLabel}
          <input
            className={`border-2 border-forest bg-cream outline-none ${inputPad}`}
            value={form.organization}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                organization: event.target.value,
              }))
            }
          />
        </label>
        <div className="grid min-w-0 gap-3 sm:grid-cols-2">
          <label className="grid min-w-0 gap-1 text-xs sm:text-sm">
            {catering.nameLabel}
            <input
              required
              className={`w-full min-w-0 border-2 border-forest bg-cream outline-none ${inputPad}`}
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
            />
          </label>
          <label className="grid min-w-0 gap-1 text-xs sm:text-sm">
            {catering.contactLabel}
            <input
              required
              placeholder={catering.contactPlaceholder}
              className={`w-full min-w-0 border-2 border-forest bg-cream outline-none ${inputPad}`}
              value={form.contact}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  contact: event.target.value,
                }))
              }
            />
          </label>
        </div>
        <label className="grid gap-1 text-xs sm:text-sm">
          {catering.notesLabel}
          <textarea
            rows={noteRows}
            placeholder={catering.notesPlaceholder}
            className={`border-2 border-forest bg-cream outline-none ${inputPad}`}
            value={form.notes}
            onChange={(event) =>
              setForm((current) => ({ ...current, notes: event.target.value }))
            }
          />
        </label>
      </div>

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

      {error ? <p className="mt-3 text-sm text-terra">{error}</p> : null}

      <button
        type="submit"
        disabled={!canSubmit || status === "submitting"}
        className="mt-5 w-full bg-forest px-5 py-3 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-cream disabled:opacity-40"
      >
        {status === "submitting" ? "…" : catering.submit}
      </button>
    </form>
  );
}
