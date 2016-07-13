#!/bin/bash

df -m | awk '{ print $6,$2,$3,$5 }'
