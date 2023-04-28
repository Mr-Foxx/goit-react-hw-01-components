import { Table,TableHead,TableRow,ItemHead,TableBody,ItemBody } from "./TransactionHistory.module";
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    
    return (
        <Table>
            <TableHead>
                
                <TableRow>
                    <ItemHead>TYPE</ItemHead>
                    <ItemHead>AMOUNT</ItemHead>
                    <ItemHead>CURRENCY</ItemHead>
                </TableRow>
            </TableHead>

                <TableBody>
                    {items.map(({ id, type, amount, currency })=>(
                        <TableRow key={id} >
                            <ItemBody>{ type}</ItemBody>
                            <ItemBody>{ amount}</ItemBody>
                            <ItemBody>{ currency}</ItemBody>
                    </TableRow>
                    ))}


                </TableBody>
            
        
        </Table>
    )
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type:PropTypes.string.isRequired,
            amount:PropTypes.string.isRequired,
            currency:PropTypes.string.isRequired,
            id:PropTypes.string.isRequired
        })
    )
}