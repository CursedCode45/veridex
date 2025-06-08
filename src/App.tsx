import React from 'react'

function App() {
	const [count, setCount] = React.useState(0)


	return (
		<div className="bg-black text-white h-dvh w-dvw">
			Veridex {count}
		</div>
	)
}

export default App
