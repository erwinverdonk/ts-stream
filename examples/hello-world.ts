/**
 * Promise-based object stream with seamless support for back-pressure and error
 * handling, written in Typescript.
 *
 * Copyright (C) 2015 Martin Poelstra
 * License: MIT
 */

/// <reference path="../typings/tsd.d.ts" />

import Stream from "../index";

Stream.from([1,2,3,4])
	.map((n) => n * 2)
	.forEach((n) => console.log(n));

// 2, 4, 6, 8