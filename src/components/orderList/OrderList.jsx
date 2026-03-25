import { useEffect, useMemo, useState } from 'react';
import './OrderList.css';
import { orderListPageData } from '../data/OrderList';

const FilterIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M4 5.5c0-.83.67-1.5 1.5-1.5h13a1.5 1.5 0 1 1 0 3h-13C4.67 7 4 6.33 4 5.5Zm4 6c0-.83.67-1.5 1.5-1.5h5a1.5 1.5 0 1 1 0 3h-5c-.83 0-1.5-.67-1.5-1.5Zm2 6c0-.83.67-1.5 1.5-1.5h1a1.5 1.5 0 1 1 0 3h-1c-.83 0-1.5-.67-1.5-1.5Z"
      fill="currentColor"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M7.47 8.97a.75.75 0 0 1 1.06 0L12 12.44l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
      fill="currentColor"
    />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M14.53 6.47a.75.75 0 0 1 0 1.06L10.06 12l4.47 4.47a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0Z"
      fill="currentColor"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M9.47 17.53a.75.75 0 0 1 0-1.06L13.94 12 9.47 7.53a.75.75 0 0 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0Z"
      fill="currentColor"
    />
  </svg>
);

const ResetIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M12 5a7 7 0 1 1-6.99 7.46.75.75 0 0 1 1.5-.16A5.5 5.5 0 1 0 12 6.5h-.67l1.2 1.2a.75.75 0 1 1-1.06 1.06L8.98 6.3a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 1.06L11.31 5H12Z"
      fill="currentColor"
    />
  </svg>
);

const StatusBadge = ({ value, statusClasses }) => (
  <span className={`order-list-status-badge ${statusClasses[value] ?? ''}`}>{value}</span>
);

const OrderListTable = ({ headers, rows, statusClasses }) => (
  <div className="order-list-table-shell">
    <div className="order-list-table-scroll">
      <table className="order-list-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={headers.length} className="order-list-empty-cell">
                No orders found for selected filters.
              </td>
            </tr>
          ) : (
            rows.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.address}</td>
                <td>{order.date}</td>
                <td>{order.type}</td>
                <td>
                  <StatusBadge value={order.status} statusClasses={statusClasses} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </div>
);

const DatePopup = ({ calendar, pendingDate, onPickDate, onApply }) => (
  <div className="order-list-popup order-list-popup-date" role="dialog" aria-modal="false">
    <div className="order-list-calendar-head">
      <p>{calendar.monthLabel}</p>
      <div className="order-list-calendar-nav">
        <button type="button" className="order-list-calendar-nav-btn" disabled aria-label="Previous month">
          <ChevronLeftIcon />
        </button>
        <button type="button" className="order-list-calendar-nav-btn" disabled aria-label="Next month">
          <ChevronRightIcon />
        </button>
      </div>
    </div>
    <div className="order-list-calendar-grid order-list-calendar-weekdays">
      {calendar.weekdays.map((weekday) => (
        <span key={weekday}>{weekday}</span>
      ))}
    </div>
    <div className="order-list-calendar-grid order-list-calendar-days">
      {calendar.days.map((day) => {
        const className = [
          'order-list-day-cell',
          day.inCurrentMonth ? '' : 'is-muted',
          pendingDate === day.value ? 'is-selected' : '',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <button
            key={day.value}
            type="button"
            className={className}
            onClick={() => onPickDate(day.value)}
          >
            {day.day}
          </button>
        );
      })}
    </div>
    <p className="order-list-popup-help">{calendar.helperText}</p>
    <button type="button" className="order-list-apply-btn" onClick={onApply}>
      Apply Now
    </button>
  </div>
);

const OptionPopup = ({
  title,
  helperText,
  options,
  pendingValues,
  onToggle,
  onApply,
  popupClassName,
}) => (
  <div className={`order-list-popup ${popupClassName}`} role="dialog" aria-modal="false">
    <p className="order-list-popup-title">{title}</p>
    <div className="order-list-chip-grid">
      {options.map((option) => {
        const isActive = pendingValues.includes(option);
        return (
          <button
            key={option}
            type="button"
            className={`order-list-chip ${isActive ? 'is-active' : ''}`}
            onClick={() => onToggle(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
    <p className="order-list-popup-help">{helperText}</p>
    <button type="button" className="order-list-apply-btn" onClick={onApply}>
      Apply Now
    </button>
  </div>
);

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

  const [openFilter, setOpenFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [appliedDate, setAppliedDate] = useState('');
  const [appliedTypes, setAppliedTypes] = useState([]);
  const [appliedStatuses, setAppliedStatuses] = useState([]);
  const [pendingDate, setPendingDate] = useState('');
  const [pendingTypes, setPendingTypes] = useState([]);
  const [pendingStatuses, setPendingStatuses] = useState([]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpenFilter(null);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const filteredOrders = useMemo(() => orders, [orders]);

  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / pageSize));
  const currentVisiblePage = Math.min(currentPage, totalPages);

  const visibleOrders = useMemo(
    () => filteredOrders.slice((currentVisiblePage - 1) * pageSize, currentVisiblePage * pageSize),
    [filteredOrders, currentVisiblePage, pageSize]
  );

  const summaryStart = filteredOrders.length === 0 ? 0 : (currentVisiblePage - 1) * pageSize + 1;
  const summaryEnd = Math.min(currentVisiblePage * pageSize, filteredOrders.length);

  const openFilterMenu = (target) => {
    if (openFilter === target) {
      setOpenFilter(null);
      return;
    }

    if (target === 'date') {
      setPendingDate(appliedDate);
    }

    if (target === 'type') {
      setPendingTypes(appliedTypes);
    }

    if (target === 'status') {
      setPendingStatuses(appliedStatuses);
    }

    setOpenFilter(target);
  };

  const togglePendingType = (typeName) => {
    setPendingTypes((prev) =>
      prev.includes(typeName) ? prev.filter((item) => item !== typeName) : [...prev, typeName]
    );
  };

  const togglePendingStatus = (statusName) => {
    setPendingStatuses((prev) =>
      prev.includes(statusName) ? prev.filter((item) => item !== statusName) : [...prev, statusName]
    );
  };

  const applyDateFilter = () => {
    setAppliedDate(pendingDate);
    setCurrentPage(1);
    setOpenFilter(null);
  };

  const applyTypeFilter = () => {
    setAppliedTypes(pendingTypes);
    setCurrentPage(1);
    setOpenFilter(null);
  };

  const applyStatusFilter = () => {
    setAppliedStatuses(pendingStatuses);
    setCurrentPage(1);
    setOpenFilter(null);
  };

  const resetFilters = () => {
    setAppliedDate('');
    setAppliedTypes([]);
    setAppliedStatuses([]);
    setPendingDate('');
    setPendingTypes([]);
    setPendingStatuses([]);
    setCurrentPage(1);
    setOpenFilter(null);
  };

  const isDateFiltered = Boolean(appliedDate);

  return (
    <section className="order-list-page">
      <h1 className="order-list-title">{title}</h1>

      <div className="order-list-filter-bar">
        <div className="order-list-filter-cell order-list-filter-icon">
          <FilterIcon />
        </div>

        <div className="order-list-filter-cell order-list-filter-label">{filters.label}</div>

        <div className="order-list-filter-cell order-list-filter-menu">
          <button
            type="button"
            className={`order-list-filter-trigger ${openFilter === 'date' ? 'is-open' : ''}`}
            onClick={() => openFilterMenu('date')}
          >
            <span>{appliedDate || filters.datePlaceholder}</span>
            <ChevronDownIcon />
          </button>
          {openFilter === 'date' ? (
            <DatePopup
              calendar={filters.calendar}
              pendingDate={pendingDate}
              onPickDate={setPendingDate}
              onApply={applyDateFilter}
            />
          ) : null}
        </div>

        <div className="order-list-filter-cell order-list-filter-menu">
          <button
            type="button"
            className={`order-list-filter-trigger ${openFilter === 'type' ? 'is-open' : ''}`}
            onClick={() => openFilterMenu('type')}
          >
            <span>{appliedTypes.length > 0 ? `${appliedTypes.length} Selected` : filters.typePlaceholder}</span>
            <ChevronDownIcon />
          </button>
          {openFilter === 'type' ? (
            <OptionPopup
              title={filters.typeTitle}
              helperText={filters.typeHelper}
              options={filters.typeOptions}
              pendingValues={pendingTypes}
              onToggle={togglePendingType}
              onApply={applyTypeFilter}
              popupClassName="order-list-popup-type"
            />
          ) : null}
        </div>

        <div className="order-list-filter-cell order-list-filter-menu">
          <button
            type="button"
            className={`order-list-filter-trigger ${openFilter === 'status' ? 'is-open' : ''}`}
            onClick={() => openFilterMenu('status')}
          >
            <span>
              {appliedStatuses.length > 0 ? `${appliedStatuses.length} Selected` : filters.statusPlaceholder}
            </span>
            <ChevronDownIcon />
          </button>
          {openFilter === 'status' ? (
            <OptionPopup
              title={filters.statusTitle}
              helperText={filters.statusHelper}
              options={filters.statusOptions}
              pendingValues={pendingStatuses}
              onToggle={togglePendingStatus}
              onApply={applyStatusFilter}
              popupClassName="order-list-popup-status"
            />
          ) : null}
        </div>

        <button type="button" className="order-list-filter-cell order-list-reset-btn" onClick={resetFilters}>
          <ResetIcon />
          <span>{filters.resetLabel}</span>
        </button>
      </div>

      <OrderListTable headers={tableHeaders} rows={visibleOrders} statusClasses={statusClasses} />

      {isDateFiltered ? (
        <div className="order-list-date-footer">
          <button type="button" className="order-list-date-nav-btn-text">
            <ChevronLeftIcon />
            <span>{dateControls.prev}</span>
          </button>
          <button type="button" className="order-list-date-nav-btn-text">
            <span>{dateControls.next}</span>
            <ChevronRightIcon />
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
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentVisiblePage === 1}
              aria-label="Previous page"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              className="order-list-page-btn"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentVisiblePage === totalPages}
              aria-label="Next page"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderList;
