import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form-elements/Form"
import { Input } from "@/components/ui/form-elements/Input"
import { IAuthForm } from "@/shared/types/auth.interface"
import { validEmail } from "@/shared/types/regex"
import { UseFormReturn } from "react-hook-form"

interface AuthFieldsProps {
	form: UseFormReturn<IAuthForm, any, undefined>
	isPending: boolean
	isReg?: boolean
}

export function AuthFields({
	form,
	isPending,
	isReg = false
}: AuthFieldsProps) {
	return (
		<>
			{isReg && (
				<FormField 
						control={form.control}
						name="name"
						rules={{
							required: 'Name is mandatory'
						}}
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input 
										placeholder='Donald'
										disabled={isPending}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
				/>
			)}

				<FormField 
						control={form.control}
						name="email"
						rules={{
							required: 'Email is mandatory',
							pattern: {
								value: validEmail,
								message: 'Enter a valid mail'
							}
						}}
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input 
										placeholder='donald@example.com'
										type='email'
										disabled={isPending}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
				/>

				<FormField 
						control={form.control}
						name="password"
						rules={{
							required: 'Password is mandatory',
							minLength: {
								value: 6,
								message: 'Min 6 characters'
							}
						}}
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input 
										placeholder='******'
										type='password'
										disabled={isPending}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
				/>
		</>
	)
}