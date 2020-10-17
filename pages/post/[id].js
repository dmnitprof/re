import {useRouter} from 'next/router'
import React from "react";

export default function Post() {
	const router = useRouter()
	return <>
		<h1>Post {router.query.id}</h1>
	</>
}
