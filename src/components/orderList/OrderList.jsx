import { useEffect, useState } from 'react';
import './OrderList.css';
import { orderListPageData } from '../data/OrderList';

const OrderList = () => {
  const {
    title,
    totalOrders,
    pageSize,
    tableHeaders,
    orders,
    statusClasses,
    filters,
    dateControls,
  } = orderListPageData;

  const [openFilter, setOpenFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const [tempDate, setTempDate] = useState('');
  const [tempTypes, setTempTypes] = useState([]);
  const [tempStatuses, setTempStatuses] = useState([]);

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setOpenFilter('');
      }
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  const toggleFilter = (filterName) => {
    if (openFilter === filterName) {
      setOpenFilter('');
      return;
    }

    if (filterName === 'date') {
      setTempDate(selectedDate);
    }

    if (filterName === 'type') {
      setTempTypes(selectedTypes);
    }

    if (filterName === 'status') {
      setTempStatuses(selectedStatuses);
    }

    setOpenFilter(filterName);
  };

  const toggleTempType = (typeName) => {
    if (tempTypes.includes(typeName)) {
      setTempTypes(tempTypes.filter((item) => item !== typeName));
      return;
    }
    setTempTypes([...tempTypes, typeName]);
  };

  const toggleTempStatus = (statusName) => {
    if (tempStatuses.includes(statusName)) {
      setTempStatuses(tempStatuses.filter((item) => item !== statusName));
      return;
    }
    setTempStatuses([...tempStatuses, statusName]);
  };

  const applyDate = () => {
    setSelectedDate(tempDate);
    setCurrentPage(1);
    setOpenFilter('');
  };

  const applyType = () => {
    setSelectedTypes(tempTypes);
    setCurrentPage(1);
    setOpenFilter('');
  };

  const applyStatus = () => {
    setSelectedStatuses(tempStatuses);
    setCurrentPage(1);
    setOpenFilter('');
  };

  const resetFilters = () => {
    setSelectedDate('');
    setSelectedTypes([]);
    setSelectedStatuses([]);
    setTempDate('');
    setTempTypes([]);
    setTempStatuses([]);
    setCurrentPage(1);
    setOpenFilter('');
  };

  const filteredOrders = orders.filter((order) => {
    const dateMatch = selectedDate === '' || order.calendarDate === selectedDate;
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(order.orderType);
    const statusMatch = selectedStatuses.length === 0 || selectedStatuses.includes(order.status);

    return dateMatch && typeMatch && statusMatch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * pageSize;
  const visibleOrders = filteredOrders.slice(startIndex, startIndex + pageSize);
  const summaryStart = filteredOrders.length === 0 ? 0 : startIndex + 1;
  const summaryEnd = Math.min(startIndex + pageSize, filteredOrders.length);
  const isDateFiltered = selectedDate !== '';

  return (
    <section className="order-list-page">
      <h1 className="order-list-title">{title}</h1>

      <div className="order-list-filter-bar">
        <div className="order-list-filter-cell order-list-filter-icon">
          <span className="order-list-icon order-list-icon-filter" aria-hidden="true">
            |||
          </span>
        </div>

        <div className="order-list-filter-cell order-list-filter-label">{filters.label}</div>

        <div className="order-list-filter-cell order-list-filter-menu">
          <button
            type="button"
            className={`order-list-filter-trigger ${openFilter === 'date' ? 'is-open' : ''}`}
            onClick={() => toggleFilter('date')}
          >
            <span>{selectedDate || filters.datePlaceholder}</span>
            <span className="order-list-icon" aria-hidden="true">
              v
            </span>
          </button>

          {openFilter === 'date' && (
            <div className="order-list-popup order-list-popup-date">
              <div className="order-list-calendar-head">
                <p>{filters.calendar.monthLabel}</p>
                <div className="order-list-calendar-nav">
                  <button type="button" className="order-list-calendar-nav-btn" disabled aria-label="Previous month">
                    <span className="order-list-icon" aria-hidden="true">
                      {'<'}
                    </span>
                  </button>
                  <button type="button" className="order-list-calendar-nav-btn" disabled aria-label="Next month">
                    <span className="order-list-icon" aria-hidden="true">
                      {'>'}
                    </span>
                  </button>
                </div>
              </div>

              <div className="order-list-calendar-grid order-list-calendar-weekdays">
                {filters.calendar.weekdays.map((weekday) => (
                  <span key={weekday}>{weekday}</span>
                ))}
              </div>

              <div className="order-list-calendar-grid order-list-calendar-days">
                {filters.calendar.days.map((day) => {
                  const isSelected = tempDate === day.value;
                  const className = `order-list-day-cell${day.inCurrentMonth ? '' : ' is-muted'}${
                    isSelected ? ' is-selected' : ''
                  }`;

                  return (
                    <button
                      key={day.value}
                      type="button"
                      className={className}
                      onClick={() => setTempDate(day.value)}
                    >
                      {day.day}
                    </button>
                  );
                })}
              </div>

              <p className="order-list-popup-help">{filters.calendar.helperText}</p>
              <button type="button" className="order-list-apply-btn" onClick={applyDate}>
                Apply Now
              </button>
            </div>
          )}
        </div>

        <div className="order-list-filter-cell order-list-filter-menu">
          <button
            type="button"
            className={`order-list-filter-trigger ${openFilter === 'type' ? 'is-open' : ''}`}
            onClick={() => toggleFilter('type')}
          >
            <span>{selectedTypes.length > 0 ? `${selectedTypes.length} Selected` : filters.typePlaceholder}</span>
            <span className="order-list-icon" aria-hidden="true">
              v
            </span>
          </button>

          {openFilter === 'type' && (
            <div className="order-list-popup order-list-popup-type">
              <p className="order-list-popup-title">{filters.typeTitle}</p>
              <div className="order-list-chip-grid">
                {filters.typeOptions.map((typeOption) => (
                  <button
                    key={typeOption}
                    type="button"
                    className={`order-list-chip ${tempTypes.includes(typeOption) ? 'is-active' : ''}`}
                    onClick={() => toggleTempType(typeOption)}
                  >
                    {typeOption}
                  </button>
                ))}
              </div>
              <p className="order-list-popup-help">{filters.typeHelper}</p>
              <button type="button" className="order-list-apply-btn" onClick={applyType}>
                Apply Now
              </button>
            </div>
          )}
        </div>

        <div className="order-list-filter-cell order-list-filter-menu">
          <button
            type="button"
            className={`order-list-filter-trigger ${openFilter === 'status' ? 'is-open' : ''}`}
            onClick={() => toggleFilter('status')}
          >
            <span>
              {selectedStatuses.length > 0 ? `${selectedStatuses.length} Selected` : filters.statusPlaceholder}
            </span>
            <span className="order-list-icon" aria-hidden="true">
              v
            </span>
          </button>

          {openFilter === 'status' && (
            <div className="order-list-popup order-list-popup-status">
              <p className="order-list-popup-title">{filters.statusTitle}</p>
              <div className="order-list-chip-grid">
                {filters.statusOptions.map((statusOption) => (
                  <button
                    key={statusOption}
                    type="button"
                    className={`order-list-chip ${tempStatuses.includes(statusOption) ? 'is-active' : ''}`}
                    onClick={() => toggleTempStatus(statusOption)}
                  >
                    {statusOption}
                  </button>
                ))}
              </div>
              <p className="order-list-popup-help">{filters.statusHelper}</p>
              <button type="button" className="order-list-apply-btn" onClick={applyStatus}>
                Apply Now
              </button>
            </div>
          )}
        </div>

        <button type="button" className="order-list-filter-cell order-list-reset-btn" onClick={resetFilters}>
          <span className="order-list-icon" aria-hidden="true">
            o
          </span>
          <span>{filters.resetLabel}</span>
        </button>
      </div>

      <div className="order-list-table-shell">
        <div className="order-list-table-scroll">
          <table className="order-list-table">
            <thead>
              <tr>
                {tableHeaders.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleOrders.length === 0 ? (
                <tr>
                  <td colSpan={tableHeaders.length} className="order-list-empty-cell">
                    No orders found for selected filters.
                  </td>
                </tr>
              ) : (
                visibleOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.name}</td>
                    <td>{order.address}</td>
                    <td>{order.date}</td>
                    <td>{order.type}</td>
                    <td>
                      <span className={`order-list-status-badge ${statusClasses[order.status] || ''}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isDateFiltered ? (
        <div className="order-list-date-footer">
          <button type="button" className="order-list-date-nav-btn-text">
            <span className="order-list-icon" aria-hidden="true">
              {'<'}
            </span>
            <span>{dateControls.prev}</span>
          </button>
          <button type="button" className="order-list-date-nav-btn-text">
            <span>{dateControls.next}</span>
            <span className="order-list-icon" aria-hidden="true">
              {'>'}
            </span>
          </button>
        </div>
      ) : (
        <div className="order-list-pagination">
          <p className="order-list-pagination-text">
            Showing {summaryStart.toString().padStart(2, '0')}-{summaryEnd.toString().padStart(2, '0')} of{' '}
            {totalOrders}
          </p>
          <div className="order-list-pagination-actions">
            <button
              type="button"
              className="order-list-page-btn"
              onClick={() => setCurrentPage(Math.max(1, safeCurrentPage - 1))}
              disabled={safeCurrentPage === 1}
              aria-label="Previous page"
            >
              <span className="order-list-icon" aria-hidden="true">
                {'<'}
              </span>
            </button>
            <button
              type="button"
              className="order-list-page-btn"
              onClick={() => setCurrentPage(Math.min(totalPages, safeCurrentPage + 1))}
              disabled={safeCurrentPage === totalPages}
              aria-label="Next page"
            >
              <span className="order-list-icon" aria-hidden="true">
                {'>'}
              </span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderList;
