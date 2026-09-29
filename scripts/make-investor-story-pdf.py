#!/usr/bin/env python3
"""Draft investor one-pager PDF — not for production deploy."""

from pathlib import Path

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

pdfmetrics.registerFont(TTFont("Sans", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("SansBold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))

PAPER = HexColor("#F5F0E6")
INK = HexColor("#2A2A2A")
LEAF = HexColor("#3DAE5A")
MUTED = HexColor("#5A5A5A")
LINE = HexColor("#D8D2C4")
OCHRE = HexColor("#F4C430")

OUT = Path("/opt/cursor/artifacts/kok_investor_story_draft.pdf")
SRC = Path("/workspace/drafts/investor-story.md")


def wrap(c, text, font, size, max_w):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        trial = f"{cur} {w}".strip()
        if c.stringWidth(trial, font, size) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def draw_wrapped(c, text, x, y, font, size, max_w, leading, color=INK):
    c.setFillColor(color)
    c.setFont(font, size)
    for line in wrap(c, text, font, size, max_w):
        c.drawString(x, y, line)
        y -= leading
    return y


def section_num(c, n, x, y):
    c.setFillColor(LEAF)
    c.setFont("SansBold", 11)
    c.drawString(x, y, n)


def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    SRC.parent.mkdir(parents=True, exist_ok=True)

    story_md = """# KŌK — черновик истории для инвестора (не прод)

Цель: короткий путь «почему вкладываться → оставить контакт».
Без терминов Hub & Spoke. Без визуального шума.

## Последовательность

1. **Боль** — классическая точка общепита дорогая и медленная
2. **Что вы покупаете** — точку сборки и продажи; готовка — у сети
3. **Цифры** — аренда, люди, электрика, срок запуска
4. **Продукт** — понятная пита, которую собирают за минуту
5. **Действие** — город + контакт

## Текст (черновик PDF)

См. сгенерированный PDF в артефактах.
"""
    SRC.write_text(story_md, encoding="utf-8")

    w, h = A4
    c = canvas.Canvas(str(OUT), pagesize=A4)
    margin = 18 * mm
    max_w = w - 2 * margin

    # —— Page 1 ——
    c.setFillColor(PAPER)
    c.rect(0, 0, w, h, fill=1, stroke=0)

    y = h - 22 * mm
    c.setFillColor(LEAF)
    c.setFont("SansBold", 28)
    c.drawString(margin, y, "KŌK")
    c.setFillColor(INK)
    c.setFont("SansBold", 12)
    c.drawString(margin + 28 * mm, y + 2, "Тез. Таза. Fresh.")

    y -= 10 * mm
    c.setStrokeColor(LEAF)
    c.setLineWidth(2)
    c.line(margin, y, margin + 28 * mm, y)

    y -= 12 * mm
    c.setFillColor(INK)
    c.setFont("SansBold", 20)
    for line in wrap(c, "Почему точка KŌK — рациональная ставка, а не «ещё одно кафе».", "SansBold", 20, max_w):
        c.drawString(margin, y, line)
        y -= 7.5 * mm

    y -= 2 * mm
    c.setFillColor(MUTED)
    c.setFont("Sans", 10)
    c.drawString(margin, y, "Черновик для custdev · не для публикации")

    # Beat 1
    y -= 14 * mm
    section_num(c, "01", margin, y)
    c.setFillColor(INK)
    c.setFont("SansBold", 13)
    c.drawString(margin + 10 * mm, y, "Обычная точка съедает деньги до открытия")
    y -= 7 * mm
    y = draw_wrapped(
        c,
        "Нужны повар, большая площадь, мощная вентиляция и 50–70 кВт. В жилом фонде и стрит-ритейле это долго, дорого и рискованно.",
        margin,
        y,
        "Sans",
        10.5,
        max_w,
        5.2 * mm,
        MUTED,
    )

    # Beat 2
    y -= 9 * mm
    section_num(c, "02", margin, y)
    c.setFillColor(INK)
    c.setFont("SansBold", 13)
    c.drawString(margin + 10 * mm, y, "Вы открываете точку продажи. Готовит сеть.")
    y -= 7 * mm
    y = draw_wrapped(
        c,
        "Центральный цех делает курицу су-вид, соусы и заготовки. На вашей точке — прогрев, сборка питы и выдача. Без фритюра, без «кухни ресторана» на смене.",
        margin,
        y,
        "Sans",
        10.5,
        max_w,
        5.2 * mm,
        MUTED,
    )

    # Beat 3 — numbers
    y -= 10 * mm
    section_num(c, "03", margin, y)
    c.setFillColor(INK)
    c.setFont("SansBold", 13)
    c.drawString(margin + 10 * mm, y, "Цифры, на которых держится решение")
    y -= 9 * mm

    cards = [
        ("−40%", "фонд оплаты труда", "оператор 15–18 тыс. ₸/смена вместо повара 25–30"),
        ("45–60 м²", "midi-формат", "на 50–60% меньше классического кафе · 20–25 посадок"),
        ("18–25 кВт", "мощность", "вместо типичных 50–70 кВт — ниже ввод и CAPEX"),
        ("3–4 нед.", "до открытия", "лёгкий ремонт, без тяжёлой вытяжки и гидрофильтра"),
        ("60 сек.", "сборка блюда", "гость не ждёт кухню — линия сборки по техкарте"),
        ("<2%", "списания", "порции с цеха бьются с чеками, не «на глаз»"),
    ]

    col_w = (max_w - 6 * mm) / 2
    card_h = 30 * mm
    row_h = 34 * mm
    pad_x = 7 * mm
    pad_top = 8 * mm
    for i, (value, label, note) in enumerate(cards):
        col = i % 2
        row = i // 2
        x = margin + col * (col_w + 6 * mm)
        top = y - row * row_h
        bottom = top - card_h
        c.setStrokeColor(LINE)
        c.setLineWidth(1)
        c.setFillColor(HexColor("#FFFDF8"))
        c.roundRect(x, bottom, col_w, card_h, 2.5 * mm, fill=1, stroke=1)

        text_x = x + pad_x
        text_w = col_w - 2 * pad_x
        value_y = top - pad_top - 1 * mm
        c.setFillColor(LEAF)
        c.setFont("SansBold", 15)
        c.drawString(text_x, value_y, value)

        label_y = value_y - 6.5 * mm
        c.setFillColor(INK)
        c.setFont("SansBold", 9)
        c.drawString(text_x, label_y, label)

        note_y = label_y - 5.2 * mm
        c.setFillColor(MUTED)
        c.setFont("Sans", 8)
        for line in wrap(c, note, "Sans", 8, text_w):
            if note_y < bottom + 4 * mm:
                break
            c.drawString(text_x, note_y, line)
            note_y -= 3.6 * mm

    y -= 3 * row_h + 2 * mm

    # Beat 4
    section_num(c, "04", margin, y)
    c.setFillColor(INK)
    c.setFont("SansBold", 13)
    c.drawString(margin + 10 * mm, y, "Продукт понятен за секунду")
    y -= 7 * mm
    y = draw_wrapped(
        c,
        "Пита с курицей су-вид. Мало позиций, пять соусов. Утром точка работает как кофейня (8:00–11:30); днём — еда с собой. Кросс-продажа салатов и напитков — до 42%.",
        margin,
        y,
        "Sans",
        10.5,
        max_w,
        5.2 * mm,
        MUTED,
    )

    y -= 10 * mm
    c.setFillColor(LEAF)
    cta_h = 38 * mm
    c.roundRect(margin, y - cta_h, max_w, cta_h, 3 * mm, fill=1, stroke=0)
    c.setFillColor(HexColor("#F5F0E6"))
    c.setFont("SansBold", 12)
    c.drawString(margin + 6 * mm, y - 8 * mm, "05  ·  Следующий шаг")
    c.setFont("Sans", 10)
    ty = y - 15 * mm
    for line in wrap(
        c,
        "Если город свободен и цифры сходятся — оставляете контакт. Мы считаем конкретную локацию: midi 45–60 м² или express 25–35 м² на фудкорте.",
        "Sans",
        10,
        max_w - 12 * mm,
    ):
        c.drawString(margin + 6 * mm, ty, line)
        ty -= 4.5 * mm
    c.setFont("SansBold", 11)
    c.drawString(margin + 6 * mm, y - cta_h + 7 * mm, "sj@hostai.kz")

    c.setFillColor(MUTED)
    c.setFont("Sans", 8)
    c.drawCentredString(w / 2, 12 * mm, "DRAFT — не публиковать · ориентиры модели, не оферта")

    c.showPage()

    # —— Page 2: one clean sequence strip (for stakeholders) ——
    c.setFillColor(PAPER)
    c.rect(0, 0, w, h, fill=1, stroke=0)

    y = h - 22 * mm
    c.setFillColor(INK)
    c.setFont("SansBold", 16)
    c.drawString(margin, y, "Сценарий страницы (черновик структуры)")
    y -= 6 * mm
    c.setFillColor(MUTED)
    c.setFont("Sans", 9)
    c.drawString(margin, y, "Один экран → одно сообщение. Без англицизмов и без сетки из десяти блоков.")

    beats = [
        ("Экран 1", "Заголовок", "Точка продажи без ресторанных затрат.", "Одна фраза + 3 числа: −40% люди · 18–25 кВт · 3–4 недели"),
        ("Экран 2", "Как устроено", "Сеть готовит. Вы собираете и продаёте.", "Без фритюра. Площадь 45–60 м² или 25–35 м² to-go."),
        ("Экран 3", "Почему сейчас", "Гость за 60 секунд. Запуск за недели, не за квартал.", "Списания <2%. Утро — кофе, день — пита с собой."),
        ("Экран 4", "Контакт", "Какой город хотите вести?", "Имя + телефон/Telegram. Без длинной анкеты."),
    ]

    y -= 12 * mm
    for title, role, head, detail in beats:
        c.setStrokeColor(LINE)
        c.setFillColor(HexColor("#FFFDF8"))
        c.roundRect(margin, y - 28 * mm, max_w, 30 * mm, 2 * mm, fill=1, stroke=1)
        c.setFillColor(LEAF)
        c.setFont("SansBold", 9)
        c.drawString(margin + 4 * mm, y - 5 * mm, f"{title}  ·  {role}")
        c.setFillColor(INK)
        c.setFont("SansBold", 12)
        c.drawString(margin + 4 * mm, y - 12 * mm, head)
        c.setFillColor(MUTED)
        c.setFont("Sans", 9)
        dy = y - 18 * mm
        for line in wrap(c, detail, "Sans", 9, max_w - 8 * mm):
            c.drawString(margin + 4 * mm, dy, line)
            dy -= 4 * mm
        y -= 36 * mm

    y -= 2 * mm
    c.setFillColor(INK)
    c.setFont("SansBold", 11)
    c.drawString(margin, y, "Что убрать с текущего лендинга")
    y -= 6 * mm
    for item in [
        "Термины Hub / Spoke / Facility / Electrics как «лейблы ради лейблов»",
        "Длинные манифесты, матрицы соусов и зонирования до контакта",
        "Дублирующие блоки с одними и теми же цифрами",
        "Больше одного визуала в первом экране",
    ]:
        c.setFillColor(MUTED)
        c.setFont("Sans", 9)
        c.drawString(margin, y, "–  " + item)
        y -= 5 * mm

    y -= 8 * mm
    c.setFillColor(OCHRE)
    c.roundRect(margin, y - 18 * mm, max_w, 20 * mm, 2 * mm, fill=1, stroke=0)
    c.setFillColor(INK)
    c.setFont("SansBold", 10)
    c.drawString(margin + 4 * mm, y - 7 * mm, "Решение после ревью этого PDF:")
    c.setFont("Sans", 9)
    c.drawString(margin + 4 * mm, y - 13 * mm, "утвердить текст → собрать короткий лендинг из 4 экранов → только потом деплой")

    c.setFillColor(MUTED)
    c.setFont("Sans", 8)
    c.drawCentredString(w / 2, 12 * mm, "KŌK investor story draft · page 2/2")

    c.save()
    print(f"Wrote {OUT}")
    print(f"Wrote {SRC}")


if __name__ == "__main__":
    main()
