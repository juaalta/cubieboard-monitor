#!/bin/bash

sensors | grep "Core $1" | awk '{ printf ("%1.2f\n",$3);}'
