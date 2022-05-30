@echo off && mode con: cols=35 lines=3   
set /a n=%random%%%9   
set /a n=n+1
color 0%n%
title R6tracker
echo.
set /p player= Pseudo : 
start chrome --new-window --incognito "https://r6.tracker.network/profile/psn/%player%"