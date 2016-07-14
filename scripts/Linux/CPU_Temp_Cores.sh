#!/bin/bash


sensors | grep "Core" | awk '{ printf ("%1d %1.2f\n",$2,$3);}'
