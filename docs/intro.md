---
sidebar_position: 1
---

# Intro Tutoriat

## Ce este Haskell?

Haskell este un limbaj de programare pur funcțional cunoscut pentru tipizarea statică puternică, evaluarea leneșă și accentul pe imutabilitate. Este grozav pentru construirea de aplicații fiabile, concurente și de înaltă performanță.

### Ce vei avea nevoie

- [GHC (Glasgow Haskell Compiler)](https://www.haskell.org/ghcup/install/) sau [tryhaskell.org](https://tryhaskell.org) pentru a rula cod Haskell în browser.

## Instalare

Instrucțiuni Instalare Haskell folosind GHCup

GHCup permite dezvoltatorilor să instaleze versiuni ale GHC( Glasgow Haskell Compiler) și să gestioneze proiecte pe sisteme precum GNU/Linux, macOS, FreeBSD, și Windows, instalând întregul Haskell Toolchain, care este format din:
GHC
Cabal -  permite gestionarea proiectelor și a dependințelor
HLS (Haskell Language Server) - oferă programelor de editat informații despre codul sursă precum erori sau sugestii de completare.
Stack - poate gestiona proiecte cu versiuni diferite ale compilatorului GHC, oferind posibilitatea de a avea teste.

### Instalare Windows

Un clip cu procesul de instalare pe Windows poate fi găsit aici - [link youtube](https://www.youtube.com/watch?v=bB4fmQiUYPw).

copiați comanda de mai jos, care va declanșa instalarea pachetului GHCup:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force;[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072;Invoke-Command -ScriptBlock ([ScriptBlock]::Create((Invoke-WebRequest https://www.haskell.org/ghcup/sh/bootstrap-haskell.ps1 -UseBasicParsing))) -ArgumentList $true
```

deschideți un terminal Powershell( Ctrl + Shift + P), inserați comanda copiată anterior utilizând Click Dreapta și executați comanda.
procesul de instalare va cere câteva confirmări pentru care apăsați Enter. GHCup va fi instalat în calea predefinită C:/ghcup.

În momentul în care procesul de instalare s-a terminat, reporniți terminalul Powershell. Puteți deschide o interfață interactivă a GHC folosind comanda `ghci` .

### Instalare Linux, macOS, FreeBSD sau Windows Subsystem 2 pentru Linux

copiați comanda de mai jos, care va începe procesul de instalare:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh
```

deschideți un terminal( Ctrl + Alt + t), inserați comanda copiată anterior și executați comanda.
procesul de instalare va cere câteva confirmări pentru care apăsați Enter. GHCup va fi instalat în calea ./ghcup, în mod predefinit.

În momentul în care procesul de instalare s-a terminat, reporniți terminalul. Puteți deschide o interfață interactivă a GHC folosind comanda `ghci` .

IDE

[VSCode - Haskell poate fi integrat in VSCode](https://www.haskell.org/ghcup/install/#vscode-integration)
orice editor text poate fi folosit pentru a scrie cod

[Pentru mai multe informații](https://www.haskell.org/ghcup/install/#first-steps)
