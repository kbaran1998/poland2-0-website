### Hej, hej!

Cieszymy się, że zainteresowałeś/aś się dołączeniem do teamu Digital w Polandzie! Mamy dla Ciebie zadanie rekrutacyjne. Znajdujesz się teraz w uproszczonym codebase naszej strony internetowej. Twoim celem jest uzupełnienie brakujących elementów strony strony głównej [Polanda](https://poland20.com/) (plik src/app/page.tsx) używając już gotowych komponentów.

W każdym z komponentów znajdziesz wskazówki, które podpowiedzą Ci, co trzeba zrobić.
Nie oczekujemy, że zdążysz odwzorować całą stronę – wiemy, że to spore wyzwanie. Zrób tyle, ile dasz radę. Zależy nam przede wszystkim na tym, żeby zobaczyć, jak podchodzisz do rozwiązywania problemów oraz jaki jest Twój styl programowania.

Jeśli nie jesteś w stanie zrobić nic – spokojnie! To może oznaczać, że jeszcze nie jesteś gotowy/a na to stanowisko. Polecamy wtedy trochę się podszkolić i spróbować ponownie za rok.

A jeśli uważasz, że zadanie jest do zrobienia na spokojnie, ale nie masz na nie czasu, napisz do nas na <a href="mailto:wiktor.jurkiewicz@poland20.com">wiktor.jurkiewicz@poland20.com</a> i przekonaj nas o swoich umiejętnościach. Chętnie zorganizujemy krótkiego calla i porozmawiamy.

Masz jakieś pytania albo potrzebujesz pomocy? Pisz śmiało:

<a href="mailto:wiktor.jurkiewicz@poland20.com">wiktor.jurkiewicz@poland20.com</a>

<a href="mailto:artur.mucowski@poland20.com">artur.mucowski@poland20.com</a>

Kiedy skończysz, podeślij link do swojego repozytorium na GitHubie na maila: <a href="mailto:wiktor.jurkiewicz@poland20.com">wiktor.jurkiewicz@poland20.com</a>.

A jeszcze jedno – nie korzystaj z ChatGPT, bo to widać.

Powodzenia!

Wiktor i Artur 🫡!

PS. Tutaj jest nasze oryginalne Readme:

# Poland 2.0 Website

Website for the Poland 2.0 conference. This project is built with Next.js, Typescript and tailwindcss

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 20.x or greater)
- [pnpm](https://pnpm.io/installation)

### Installation

```bash
pnpm install
pnpm dev
```

Now you can open your browser and go to http://localhost:3000

## Code Structure

- All the pages should be inside the `app` folder and should be named as `page.tsx` (where path is the route of the page)
- All the components should be inside the `_components` folder for a given page (if the component is only used in that page) or inside the `components` folder (if the component is used in multiple pages for reusability)
- For assets (images, fonts, etc.), use the `assets` folder inside the specific page folder

## Code Style

- Use `TypeScript` for type checking and better code quality
- Use `Biome` for code formatting
- For component styling, use `tailwindcss` (not `styled-components` or `css`)
- Do not to use 'isMobile' or 'isDesktop' or 'isTablet' in the code. Instead, use `tailwindcss` classes for responsiveness (e.g. `md:block`)
- For Images use the `ServerImage` and `ClientImage` components. They can be found in the components/image folder. Those wrappers will automatically figure out the image size

## Version Control

- Always create a new branch for a new feature or bug fix
- Always create a pull request for the branch and get it reviewed by someone else
- Don't merge your own pull request
- Don't push directly to the master branch
- _DON'T DO FORCE PUSH_

## Docker

To run the project in a docker container, you can use the following commands:

```bash
# Build the docker image for development environment
docker build --target dev -t poland2_0_dev .
docker run -p 3000:3000 -v $(pwd):/app poland2_0_dev

# Build the docker image for production environment
docker build --target production -t poland2_0 .
docker run -p 3000:3000 poland2_0
```
