//src/index.tsx
import ReactDOM from 'react-dom/client'
import App from './App'

const children = [
	<li>
		<a href='https://keeper.or.kr' target='_blank'>
			<p>be a KEEPER</p>
		</a>
	</li>,
	<li>
		<a href='https://wiki.keeper.or.kr' target='_blank'>
			<p>be a wiKEEPER</p>
		</a>
	</li>,
	<li>
		<a href='https://github.com/KEEPER31337' target='_blank'>
			<p>be a gitPER</p>
		</a>
	</li>
]
	
const rootVirtualDOM = <ul>{children}</ul>	
	
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
	
