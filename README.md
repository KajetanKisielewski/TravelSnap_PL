# TravelSnap

**Branch:** `lesson-3`

## 🎯 Zadanie praktyczne: Lekcja 3 — Stan, hooki i interaktywność

### Zadanie podstawowe

1. `HomeScreen` posiada `useState` z pustą tablicą podróży.
2. Formularz z 4 polami: `title`, `destination`, `date`, `rating`.
3. Przycisk „Dodaj" → `handleAddTrip` → nowa karta `TripCard`.
4. Lista podróży renderowana przez `.map()` z użyciem `TripCard`.
5. Każda `TripCard` ma `key={trip.id}`.
6. Ocena: `TextInput` → `Number()` → props (number).
7. Walidacja: puste pola NIE dodają karty.

### Rozszerzenie ★

1. Przycisk usuwania w `TripCard` (props `onDelete`).
2. Walidacja oceny: tylko wartości 1–5.
3. Wyświetlenie liczby podróży nad listą.
4. Walidacja daty: format YYYY-MM.

---

## 🚀 Jak uruchomić ten kod?

Jeśli chcesz zobaczyć gotowe rozwiązanie tej lekcji:

1. Sklonuj repozytorium i przejdź na branch `lesson-3`.
2. Zainstaluj zależności:
   ```bash
   npm install
   ```
3. Uruchom projekt:
   ```bash
   npx expo start
   ```
