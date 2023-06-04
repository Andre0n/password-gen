local type = {
	"html-css-js",
	"vite-react-ts",
	"vite-vue-ts",
}

local function setup_vite_react_ts()
	io.popen(
		"pnpm install --save-dev @commitlint/{cli,config-conventional} husky prettier prettier-plugin-tailwindcss tailwindcss postcss autoprefixer "
	)
	-- io.popen([[git init]])
	-- io.popen([[echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js]])
	-- io.popen([[pnpm husky install]])
	-- io.popen([[pnpm tailwindcss init -p]])
	-- io.popen([[pnpm husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}']])
	-- io.popen(
	-- 	[[ehco module.exports = {\ntrailingComma: "es5",\ntabWidth: 4,\nsemi: false,\nsingleQuote: true,\n}; prettier.config.js]]
	-- )
end

setup_vite_react_ts()
