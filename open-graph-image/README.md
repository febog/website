# Open Graph Image generator

This folder contains a script that generates an open graph image for the given `title` and `date`.

## Installation 

```
npm install
```

## Usage

Set the required options `title`, `date` and `filename`. You can change the site name with the optional argument `site`.

Run:

```
npm start -- -t "Hello world!" -d "March 12th, 2026" -f "my-image"
```

## Options

```
Options:
  -t, --title     Blog post title                            [string] [required]
  -d, --date      Date of the blog post i.e. March 2nd, 2026 [string] [required]
  -f, --filename  File name for the PNG i.e. my-image        [string] [required]
  -s, --site      Site name                          [string] [default: "febog"]
      --version   Show version number                                  [boolean]
      --help      Show help                                            [boolean]
```

## Output

The generated PNG image will be located under `images/`.
