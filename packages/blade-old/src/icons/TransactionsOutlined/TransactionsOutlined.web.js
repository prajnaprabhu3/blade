import React from 'react';
import Icon, { IconPropTypes } from '../../atoms/Icon';

function TransactionsOutlined(props) {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path d="M11.5441 17.7595C11.6226 17.6781 11.7164 17.6131 11.8202 17.5685C11.924 17.5238 12.0356 17.5003 12.1485 17.4993C12.2614 17.4983 12.3734 17.5199 12.478 17.5627C12.5825 17.6056 12.6774 17.6689 12.7573 17.7489C12.8371 17.8289 12.9003 17.9241 12.9431 18.0288C12.9858 18.1335 13.0073 18.2458 13.0064 18.3589C13.0054 18.4721 12.9819 18.5839 12.9373 18.6879C12.8928 18.7919 12.828 18.8859 12.7467 18.9645L8.96884 22.7502C8.92911 22.7901 8.88552 22.8259 8.83871 22.8571C8.81787 22.8708 8.79618 22.8806 8.77365 22.8925C8.74739 22.9082 8.72027 22.9225 8.69242 22.9351C8.66459 22.9457 8.6362 22.9546 8.60737 22.962C8.58271 22.9692 8.55975 22.9786 8.53423 22.9837C8.4243 23.0054 8.31119 23.0054 8.20126 22.9837C8.17617 22.9786 8.15278 22.9692 8.12854 22.962C8.0997 22.9547 8.0713 22.9457 8.04349 22.9351C8.01555 22.9224 7.9883 22.9081 7.96185 22.8925C7.94016 22.8806 7.91932 22.8708 7.89721 22.8571C7.85035 22.8258 7.80662 22.79 7.76666 22.7502L3.98874 18.9645C3.83382 18.8038 3.74809 18.5885 3.75003 18.3651C3.75197 18.1416 3.84142 17.9279 3.9991 17.7698C4.15679 17.6118 4.37011 17.5222 4.59311 17.5203C4.81611 17.5183 5.03094 17.6042 5.19135 17.7595L7.51831 20.0908L7.51831 10.3752C7.51831 10.1492 7.60792 9.9324 7.76742 9.77257C7.92692 9.61275 8.14324 9.52296 8.36881 9.52296C8.59438 9.52296 8.8107 9.61275 8.9702 9.77257C9.1297 9.9324 9.21931 10.1492 9.21931 10.3752V20.0908L11.5441 17.7595ZM16.0802 1.14286C16.0594 1.12922 16.0377 1.11942 16.0156 1.10749C15.9891 1.09186 15.9618 1.07763 15.9339 1.06488C15.9061 1.05429 15.8777 1.04533 15.8489 1.03803C15.8246 1.03079 15.8012 1.02141 15.7761 1.0163C15.6662 0.99457 15.5531 0.99457 15.4432 1.0163C15.4177 1.02141 15.3947 1.03079 15.37 1.03803C15.3412 1.04539 15.3128 1.05435 15.285 1.06488C15.2571 1.07755 15.23 1.09177 15.2038 1.10749C15.1821 1.11942 15.1612 1.12922 15.1387 1.14286C15.0919 1.1741 15.0483 1.20992 15.0086 1.24981L11.2306 5.03547C11.0757 5.19621 10.99 5.41149 10.9919 5.63494C10.9939 5.8584 11.0833 6.07215 11.241 6.23016C11.3987 6.38818 11.612 6.47781 11.835 6.47975C12.058 6.48169 12.2728 6.39579 12.4333 6.24055L14.7598 3.90924L14.7598 13.6248C14.7598 13.8508 14.8494 14.0676 15.0089 14.2274C15.1684 14.3873 15.3847 14.477 15.6103 14.477C15.8359 14.477 16.0522 14.3873 16.2117 14.2274C16.3712 14.0676 16.4608 13.8508 16.4608 13.6248V3.90924L18.7878 6.24055C18.8662 6.32194 18.9601 6.38687 19.0638 6.43153C19.1676 6.4762 19.2792 6.49971 19.3921 6.50069C19.505 6.50167 19.617 6.48011 19.7216 6.43726C19.8261 6.39441 19.921 6.33113 20.0009 6.25111C20.0807 6.17109 20.1439 6.07594 20.1867 5.9712C20.2294 5.86646 20.2509 5.75424 20.25 5.64108C20.249 5.52792 20.2255 5.41609 20.181 5.31211C20.1364 5.20813 20.0716 5.11409 19.9904 5.03547L16.2129 1.24981C16.1728 1.21 16.1289 1.17418 16.0819 1.14286H16.0802Z" />
    </Icon>
  );
}

TransactionsOutlined.propTypes = IconPropTypes;

TransactionsOutlined.defaultProps = {
  size: 'medium',
  fill: 'sapphire.800',
};

export default TransactionsOutlined;