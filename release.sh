#! /bin/bash
# script to compile less file and 
clear
lessc less/master.less assets/app.css --compress;
rm -rf release;
mkdir release;
mkdir release/assets;
mkdir release/assets/images;
mkdir release/assets/images/icons;
cp assets/app.css release/assets/app.css;
cp index-clean.html release/index.html;
cp -R assets/img/* release/assets/img/;
open release/