# ER Diagram – Relationship Summary

users 1 — 1 patients        (has)

patients 1 — N appointments (books)

doctors 1 — N appointments  (attends)

doctors 1 — N availabilities (defines)

availabilities 1 — 1 appointments (used_for)
