#!/bin/bash

function valor_USUARIO ()
{
        CPU_AUX=$2
        echo $CPU_AUX
}

function valor_NICE ()
{
        CPU_AUX=$3
        echo $CPU_AUX
}

function valor_SISTEMA ()
{
        CPU_AUX=$4
        echo $CPU_AUX
}

function valor_IDLE ()
{
        CPU_AUX=$5
        echo $CPU_AUX
}

INT_CPU1=$(cat /proc/stat | grep cpu | head -n1)
sleep 1
INT_CPU2=$(cat /proc/stat | grep cpu | head -n1)

CPU_USUARIO1=`valor_USUARIO $INT_CPU1`
CPU_USUARIO2=`valor_USUARIO $INT_CPU2`

CPU_NICE1=`valor_NICE $INT_CPU1`
CPU_NICE2=`valor_NICE $INT_CPU2`

CPU_SISTEMA1=`valor_SISTEMA $INT_CPU1`
CPU_SISTEMA2=`valor_SISTEMA $INT_CPU2`

CPU_IDLE1=`valor_IDLE $INT_CPU1`
CPU_IDLE2=`valor_IDLE $INT_CPU2`

CPU_USUARIO=`expr $CPU_USUARIO2 - $CPU_USUARIO1`
CPU_NICE=`expr $CPU_NICE2 - $CPU_NICE1`
CPU_SISTEMA=`expr $CPU_SISTEMA2 - $CPU_SISTEMA1`
CPU_IDLE=`expr $CPU_IDLE2 - $CPU_IDLE1`

# CPU_USUARIO=$(cat /proc/stat | grep cpu0 | cut -f2 -d " ")
# CPU_NICE=$(cat /proc/stat | grep cpu0 | cut -f3 -d " ")
# CPU_SISTEMA=$(cat /proc/stat | grep cpu0 | cut -f4 -d " ")
# CPU_IDLE=$(cat /proc/stat | grep cpu0 | cut -f5 -d " ")

CPU_TOTAL=`expr $CPU_USUARIO + $CPU_SISTEMA + $CPU_NICE`
CPU_MAXIMA=`expr $CPU_TOTAL + $CPU_IDLE`


# RATIO_CPU_USUARIO=`expr $CPU_USUARIO \* 100 / $CPU_MAXIMA`
# RATIO_CPU_SISTEMA=`expr $CPU_SISTEMA \* 100 / $CPU_MAXIMA`
RATIO_CPU_TOTAL=`expr $CPU_TOTAL \* 100 / $CPU_MAXIMA`

echo "$RATIO_CPU_TOTAL"
