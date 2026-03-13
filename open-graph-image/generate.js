import fs from "fs/promises";
import path from "path";
import satori from "satori";
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;

async function generateImage({ title, date, blogName, output }) {
  const robotoBoldData = await fs.readFile(
    path.resolve("assets/Roboto-Bold.ttf")
  );

  const robotoMediumData = await fs.readFile(
    path.resolve("assets/Roboto-Medium.ttf")
  );

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: WIDTH,
          height: HEIGHT,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(to right, #3371e4, #255ec7)",
          fontFamily: "Roboto",
          fontSize: 42,
          fontWeight: 500,
          color: "#f0f0f0",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                gap: "0.5rem",
                margin: "0 4rem",
              },
              children: [
                {
                  type: "svg", // Site icon
                  props: {
                    viewBox: "0 0 36 36",
                    width: 42,
                    height: 42,
                    children: [
                      {
                        type: "path",
                        props: {
                          fill: "#EA596E",
                          d: "M30 36H17c-.552 0-1-.447-1-1s.448-1 1-1h13c2.542 0 4-1.367 4-3.75 0-1.537-1.643-3.25-4-3.25h-7c-.553 0-1-.447-1-1s.447-1 1-1h7c3.589 0 6 2.715 6 5.25 0 3.493-2.355 5.75-6 5.75z",
                        },
                      },
                      {
                        type: "path",
                        props: {
                          fill: "#CCD6DD",
                          d: "M12 26.717c0-2.85 3-7.035 0-7.035-4 0-10.137 6.566-10.137 8.442C1.863 30 8.304 30 11.153 30c2.849 0 .847-.434.847-3.283z",
                        },
                      },
                      {
                        type: "path",
                        props: {
                          fill: "#CCD6DD",
                          d: "M33 23.902c0-7.973-6.554-9.752-11.381-8.787-9.38 1.876-11.132 6.442-11.132 10.194 0 4.922 9.149 4.69 14.071 4.69S33 28.825 33 23.902z",
                        },
                      },
                      {
                        type: "path",
                        props: {
                          fill: "#CCD6DD",
                          d: "M25 22.496L7.894 24.371 11.425 30H25zm-8.082-5.353c0-2.683-1.997-4.858-4.458-4.858C9.997 12.286 8 14.46 8 17.143S9.997 22 12.46 22c2.461 0 4.458-2.174 4.458-4.857z",
                        },
                      },
                      {
                        type: "path",
                        props: {
                          fill: "#F4ABBA",
                          d: "M14.37 17.683c0 1.788-1.141 3.239-2.548 3.239-1.408 0-2.548-1.451-2.548-3.239s1.14-3.238 2.548-3.238c1.407-.001 2.548 1.449 2.548 3.238z",
                        },
                      },
                      {
                        type: "circle",
                        props: {
                          fill: "#DD2E44",
                          cx: "8.5",
                          cy: "24.5",
                          r: "1.5",
                        },
                      },
                    ],
                  },
                },
                {
                  type: "div",
                  props: {
                    children: blogName,
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: 72,
                fontWeight: 700,
                margin: "2rem 4rem",
              },
              children: title,
            },
          },
          {
            type: "div",
            props: {
              style: {
                margin: "0 4rem",
              },
              children: date,
            },
          },
        ],
      },
    },
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        {
          name: "Roboto",
          data: robotoMediumData,
          weight: 500,
          style: "medium",
        },
        {
          name: "Roboto",
          data: robotoBoldData,
          weight: 700,
          style: "bold",
        },
      ],
    }
  );

  await sharp(Buffer.from(svg))
    .png()
    .toFile(output);
}

export { generateImage };
