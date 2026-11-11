# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\search.spec.js >> Поиск >> поиск по бессмысленному запросу не находит товаров
- Location: tests\ui\search.spec.js:14:3

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic: ‹ ‹ ‹ ‹ ‹ ‹
  - generic [ref=e4]:
    - generic [ref=e5]: Мы используем cookie, чтобы сделать сайт удобнее
    - generic [ref=e6]: Мы обрабатываем cookie, чтобы ваш веб-серфинг шел как по маслу, а скидки и рекомендации для вас были точно в яблочко! Хотите адаптировать настройки под себя? Настроить Cookies
    - generic [ref=e7]:
      - generic [ref=e8] [cursor=pointer]: Отклонить
      - generic [ref=e9] [cursor=pointer]: Принять все cookie
    - generic [ref=e10]:
      - text: Ознакомиться со
      - link "списком cookie-файлов" [ref=e11] [cursor=pointer]:
        - /url: https://blog.onliner.by/spisok-fajlov-cookie
      - text: и
      - link "Политикой в отношении обработки cookie-файлов" [ref=e12] [cursor=pointer]:
        - /url: https://blog.onliner.by/politika-v-otnoshenii-obrabotki-cookie-fajlov
  - dialog [aria-hidden] [ref=e13]:
    - iframe [active] [ref=e16]:
      - generic [ref=f1e1]:
        - generic [ref=f1e2]:
          - generic [ref=f1e3]:
            - generic [ref=f1e4]:
              - generic [ref=f1e5]: —
              - textbox "Поиск" [active] [ref=f1e6]
            - generic [ref=f1e9]:
              - generic [ref=f1e10] [cursor=pointer]: в каталоге
              - generic [ref=f1e11] [cursor=pointer]: в новостях
              - generic [ref=f1e12] [cursor=pointer]: на барахолке
              - generic [ref=f1e13] [cursor=pointer]: на форуме
            - generic [ref=f1e14] [cursor=pointer]: 
          - generic [ref=f1e15]:
            - list
        - generic [ref=f1e19]:
          - generic [ref=f1e20]:
            - generic "Очистить список сравнения" [ref=f1e21] [cursor=pointer]
            - link "0 товаров в сравнении" [ref=f1e23] [cursor=pointer]:
              - /url: https://catalog.onliner.by/compare/
          - generic [ref=f1e24]: Очистить список сравнения
```