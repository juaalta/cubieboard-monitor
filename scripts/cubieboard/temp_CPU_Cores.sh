#!/bin/bash


sensors | grep "temp1" | awk '{ printf ("%1d %1.2f\n",$3,$2);}'
