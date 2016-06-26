#!/bin/bash

#cat /sys/devices/platform/coretemp.0/hwmon/hwmon0/temp1_input | awk '{ printf ("%0.1f\n",$1/1000); }'
sensors | grep "temp1" | awk '{ printf ("%1.2f\n",$2);}'
