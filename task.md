Implementation Plan - Merge Demo Features into Reference

Goal:
Create a new .html file in a new folder (named yymmdd) that combines the content of reference.md with the interactive features of demo.html example

CSS: Append styles from 
demo.html
 (Collapsible Section, Keyword Highlight, Controls, TOC, Zoom) to the <style> block in <head>.

HTML Structure:
Add Control Buttons (
toggleZoom
, 
toggleTOC
) and TOC container (<div id="toc">) to the top of <body>.
Ensure the main content is wrapped in a container that the JS can target (it is already .crossnote.markdown-preview).

include the existing ./assets/layout.js and ./assets/layout.css files; do not modify these two files.



