import NotificationButton from '../NotificationButton'
import './styles.css'
function SalesCard() {
    return (
        <div className="dsmeta-card">
        <h2 className="dsmeta-sales-title">Vendas</h2>
        <div>
            <div className="dsmeta-form-control-container">
                <input className="dsmeta-form-control" type="text"/>
            </div>
            <div className="dsmeta-form-control-container">
                <input className="dsmeta-form-control" type="text"/>
            </div>
        </div>
        <div>
            <table className="dsmeta-sales-table">
                <thead>
                    <tr>
                        <th className="show992">ID</th>
                        <th className="show576">Data</th>
                        <th>Vendedor</th>
                        <th className="show992">Visitas</th>
                        <th className="show992">Vendas</th>
                        <th>Total</th>
                        <th>Notificar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="show992">#12</td>
                        <td className="show576">20/06/2022</td>
                        <td>Viego</td>
                        <td className="show992">7</td>
                        <td className="show992">5</td>
                        <td>R$7000.00</td>
                         <td>
                            <div className="dsmeta-red-bnt-container">
                                <NotificationButton/>
                            </div>
                           </td>
                    </tr>
                    <tr>
                        <td className="show992">#7</td>
                        <td className="show576">20/06/2022</td>
                        <td>Diana</td>
                        <td className="show992">20</td>
                        <td className="show992">12</td>
                        <td>R$5600.00</td>
                        <td>
                            <div className="dsmeta-red-bnt-container">
                                <NotificationButton/>
                            </div>
                           </td>
                    </tr>
                    <tr>
                        <td className="show992">#4</td>
                        <td className="show576">20/06/2022</td>
                        <td>Trundle</td>
                        <td className="show992">15</td>
                        <td className="show992">14</td>
                        <td>R$2500.00</td>
                        <td>
                            <div className="dsmeta-red-bnt-container">
                                <NotificationButton/>
                            </div>
                           </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    )
  }
  
  export default SalesCard