@echo off

<<<<<<< HEAD
start npm install
=======
npm install
npm run build
>>>>>>> origin/kiosk-dev
RD /S /Q "src"
RD /S /Q "next-env.d.ts"
RD /S /Q ".eslintrc.json"
RD /S /Q ".hintrc"
RD /S /Q "postcss.config.js"
RD /S /Q "tailwind.config.ts"
RD /S /Q "tsconfig.json"
<<<<<<< HEAD
=======
RD /S /Q "install.bat"
>>>>>>> origin/kiosk-dev
exit