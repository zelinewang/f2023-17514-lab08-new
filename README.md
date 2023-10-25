# f2023-lab08

## Running
1. Follow the directions in the lab instructions to set up a Google Cloud Vision API account and ensure you are logged
1. `npm i`
1. `npm run compile`
1. `npm run start`

If your environment is properly set up, you should get output similar to:

```
$ npm run start

> lab08@1.0.0 start
> node .

Running logo detection on ./images/cmu.jpg
Running logo detection on ./images/logo-types-collection.jpg
Running logo detection on ./images/not-a-file.jpg
File ./images/not-a-file.jpg not found
"Carnegie Mellon University" found in in file ./images/cmu.jpg
Average score for ./images/cmu.jpg: 0.6978859901428223
"IKEA" found in in file ./images/logo-types-collection.jpg
"Intel" found in in file ./images/logo-types-collection.jpg
"Castrol" found in in file ./images/logo-types-collection.jpg
"BMW Motorrad" found in in file ./images/logo-types-collection.jpg
"Burger King" found in in file ./images/logo-types-collection.jpg
"Walt Disney World" found in in file ./images/logo-types-collection.jpg
"Ford Motor Company" found in in file ./images/logo-types-collection.jpg
"Mobil" found in in file ./images/logo-types-collection.jpg
"Advanced Micro Devices" found in in file ./images/logo-types-collection.jpg
"Mastercard" found in in file ./images/logo-types-collection.jpg
Average score for ./images/logo-types-collection.jpg: 0.9283903181552887
```

## Async-ify-ing
Reimplement the Promise version of `main` as an async version (in `mainAsync`). Your version of the code should not use `.then` and it should use `try/catch` instead of `.catch`.