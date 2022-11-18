export const TableBody = ({ tableData, columns }) => {
	return (
		// <tbody>
		// 	{tableData.map((data) => {
		// 		return (
		// 			<tr key={data.id}>
		// 				{columns.map(({ accessor }) => {
		// 					const tData = data[accessor] ? data[accessor] : '——'
		// 					return <td key={accessor}>{tData}</td>
		// 				})}
		// 			</tr>
		// 		)
		// 	})}
		// </tbody>

		<tbody>
			{tableData.map((data) => (
				<tr key={data.id}>
					<td>{data.properties.last_name.rich_text[0].plain_text}</td>
					<td>{data.properties.first_name.title[0].plain_text}</td>

					<td>{data.properties.salary_2022.number}</td>
					<td>{data.properties.age.number}</td>
				</tr>
			))}
		</tbody>
	)
}

// export default TableBody
