cls
@echo off
color 0a
TITLE MySQL Manager

goto menu
:menu
cls
echo.
echo.=-=-=-=-��ѡ���MySQL�Ĳ���-=-=-=-=-
echo.
echo.1: ����MySQL
echo.
echo.2: �ر�MySQL
echo.
echo.3: ����MySQL
echo.
echo.4: �˳�
echo.
echo.=-=-=-=-����������-=-=-=-
set /p id=
if "%id%"=="1" goto startup
if "%id%"=="2" goto shutdown
if "%id%"=="3" goto reboot
if "%id%"=="4" exit
pause

:startup
echo.
call :checkMySQL 1
echo.����MySQL......
net start "MySQL"
echo.����MySQL�ɹ�!
pause
goto menu

:shutdown
echo.
call :checkMySQL 2
echo.�ر�MySQL......
net stop "MySQL"
echo.�ر�MySQL�ɹ�!
pause
goto menu

:reboot
echo.
call :checkMySQL 2
echo.�ر�MySQL......
net stop "MySQL"
echo.�ر�MySQL�ɹ�!
goto startup
goto menu

:goout
pause
goto menu

:checkMySQL
set /a count=0
for /f "tokens=1 delims= " %%i in ('tasklist /nh ^| find /i "MySQL"') do (set /a count+=1)
if %count% neq 0 if "%1" equ "1" (
  echo MySQL������
  goto goout
)
if %count% equ 0 if "%1" equ "2" (
  echo MySQLδ����
  goto goout
)