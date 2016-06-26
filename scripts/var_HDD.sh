#!/bin/bash

df -h | grep /dev/sda1 | awk '{print $5d}'
