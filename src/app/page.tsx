import DisplayerComponent from '@/components/DisplayerComponent';
import React from 'react'
const puppeteer = require('puppeteer');

export default async function Home() {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.foreca.fi/Finland/Pedersoren_Kunta/Bennas');

  // Hämtar alla h1
  const headings = await page.evaluate(() => Array.from(document.querySelectorAll('h1'), element => element.textContent));

  // Hämtar alla p
  const text = await page.evaluate(() => Array.from(document.querySelectorAll('p'), element => element.innerText));


  console.log('Paragraphs:', text);
  console.log('Headings:', headings);

  await browser.close();

  return (
    <div>
      <DisplayerComponent headings={headings} />
    </div>
  )
}
