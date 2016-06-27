#!/bin/bash

sudo hddtemp /dev/sda | awk '{print $4d}'
