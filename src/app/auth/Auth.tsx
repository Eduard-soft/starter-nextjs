'use client'

import { useState } from "react"
import { useAuthForm } from "./useAuthForm"
import styles from './Auth.module.scss'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from "@/components/ui/form-elements/Form"
import { Button } from "@/components/ui/button"
import { AuthFields } from "./AuthFields"
import { Social } from "./Social"
import Image from "next/image"

export function Auth() {

	const [isReg, setIsReg] = useState(false)

	const { onSubmit, form, isPending} = useAuthForm(isReg)

	return (
			<div className={styles.wrapper}>
				
					<div className={styles.left}>
						<Image
							 src='/images/auth.svg'
							 alt='image auth'
							 width={200}
							 height={200}
						/>
					</div>
					<div className={styles.right}>
						<Card className={styles.card}>
							<CardHeader className={styles.header}>
								<CardTitle>
									{isReg ? 'Create account' : 'Enter account'}
								</CardTitle>
								<CardDescription>
									Login or create an account
								</CardDescription>
							</CardHeader>
							<CardContent className={styles.content}>
								<Form {...form}>
									<form onSubmit={form.handleSubmit(onSubmit)}>
										<AuthFields 
												form={form}
												isPending={isPending}
												isReg={isReg}
										/>

										<Button disabled={isPending}>Continue</Button>
									</form>
								</Form>
								<Social />
							</CardContent>
							<CardFooter className={styles.footer}>
								{isReg ? 'There is already an account?' : 'There is no account yet?'}
								<button onClick={() => setIsReg(!isReg)}>
									{isReg ? 'Enter' : 'Create'}
								</button>
							</CardFooter>
						</Card>
					</div>
			</div>
	)
}