#!/bin/bash

df -h | grep /dev/mapper/fedora-root | awk '{print $5d}'
