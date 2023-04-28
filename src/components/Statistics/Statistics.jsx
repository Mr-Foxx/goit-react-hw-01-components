import { StatisticsContainer, Title, List, Items, Label, Percentage } from "./Statistics.module";
import PropTypes from 'prop-types';

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Statistics = ({ title,stats }) => {
    return (
        <StatisticsContainer>

            {title && <Title>{title}</Title>}

            <List>

          {stats.map(({ id, label, percentage }) => (
          <Items key={id} style={{ backgroundColor: getRandomColor(percentage) }}>
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </Items>
        ))}

            </List>

        </StatisticsContainer>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage:PropTypes.number.isRequired
        })
    )
}