const colorDataHolder = document.querySelector("[js-color-wheel-data]");

const colorOutput = document.querySelector("[js-color-wheel-output]");
const textOutput = document.querySelector("[js-color-wheel-text-output]");

const hueSlider = document.querySelector("[js-color-wheel]");
const saturationSlider = document.querySelector("[js-saturation-slider]");
const lightnessSlider = document.querySelector("[js-lightness-slider]");


/**
 * @param {{hue: number, saturation: number, lightness: number}} color
 */
const colorChangeHandler = (color) => {
    
    colorDataHolder.style.setProperty("--hue", `${color.hue}deg`);
    colorDataHolder.style.setProperty("--saturation", `${color.saturation}%`);
    colorDataHolder.style.setProperty("--lightness", `${color.lightness}%`);

    textOutput.textContent = `hsl(${color.hue}deg, ${color.saturation}%, ${color.lightness}%)`;
}


const colorPicker = new ColorPicker(hueSlider, saturationSlider, lightnessSlider, colorChangeHandler);