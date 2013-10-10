TESTS = test/no.test.js
REPORTER = spec
#REPORTER = dot

check: test

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--timeout 300 \
		--require should \
		--growl \
		$(TESTS)

browserify:
	browserify src/index.js > build/container.js

uglify: browserify
	uglifyjs build/container.js > build/container.min.js

build: uglify

install:
	npm install

.PHONY: test