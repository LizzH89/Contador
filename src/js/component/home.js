import React from "react";

//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>

			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
}
