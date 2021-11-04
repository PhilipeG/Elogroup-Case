import React from 'react';
import './styles.css';

function CheckBoxTable() {
    return (
        <div>

        <table className="table-leads-options">
            <tr>
                <th className="table-header"><input type="checkbox"/></th>
                <th className="table-header"></th>
            </tr>
            <tr>
                <td><input type="checkbox"/></td>
                <td className="option-name">RPA</td>
            </tr>
            <tr>
                <td><input type="checkbox"/></td>
                <td className="option-name">Produto Digital</td>
            </tr>
            <tr>
                <td><input type="checkbox"/></td>
                <td className="option-name">Analytics</td>
            </tr>
            <tr>
                <td><input type="checkbox"/></td>
                <td className="option-name">BPM</td>
            </tr>
            <tr>
                <td></td>
                <td className="option-name"></td>
            </tr>
        </table>
        <form className="checkbox">
        </form>
        </div>
    );
}
  
export default CheckBoxTable;