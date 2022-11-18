import { Table } from '../components/Table'

const tableData1 = [
	{
		id: 1,
		full_name: 'Wendall Gripton',
		email: 'wg@creative.org',
		gender: 'Male',
		age: 100,
		start_date: '2022-01-26',
	},
	{
		id: 2,
		full_name: 'samuel Mollitt',
		email: 'smol@github.io',
		gender: 'Male',
		age: 60,
		start_date: null,
	},
	{
		id: 3,
		full_name: 'Ole Rogge',
		email: 'orog@usatoday.com',
		gender: 'Male',
		age: 50,
		start_date: '2021-06-23',
	},
	{
		id: 4,
		full_name: 'Elwin Huyge',
		email: null,
		gender: 'Male',
		age: 34,
		start_date: '2021-06-07',
	},
	{
		id: 5,
		full_name: 'Anthe Maybery',
		email: 'amay@dyndns.org',
		gender: 'Female',
		age: 31,
		start_date: '2021-07-05',
	},
	{
		id: 6,
		full_name: 'Arny Amerighi',
		email: 'aameri@ibm.com',
		gender: 'Male',
		age: 35,
		start_date: '2021-03-09',
	},
	{
		id: 7,
		full_name: 'Lynnell Shimmans',
		email: 'lshimmans6@addthis.com',
		gender: 'Male',
		age: null,
		start_date: '2021-06-03',
	},
	{
		id: 8,
		full_name: 'Pierre Klug',
		email: 'pklug7@virginia.edu',
		gender: 'Female',
		age: 36,
		start_date: '2021-09-19',
	},
	{
		id: 9,
		full_name: 'Melantha Jakeway',
		email: 'mjakeway8@noaa.gov',
		gender: 'Female',
		age: 48,
		start_date: '2021-01-07',
	},
	{
		id: 10,
		full_name: 'Jodi Nickless',
		email: 'jnickless9@dagon.com',
		gender: 'Male',
		age: 36,
		start_date: '2021-02-05',
	},
]

const columns = [
	{ label: 'Full Name', accessor: 'full_name', sortable: true },
	{ label: 'Email', accessor: 'email', sortable: false },
	{ label: 'Gender', accessor: 'gender', sortable: true },
	{ label: 'Age', accessor: 'age', sortable: true },
	{ label: 'Start date', accessor: 'start_date', sortable: true },
]

const TableExample = () => {
	return (
		<>
			<Table
				caption="List of developers with an affordable course (has no default sorting)."
				data={tableData1}
				columns={columns}
			/>
		</>
	)
}

export default TableExample
