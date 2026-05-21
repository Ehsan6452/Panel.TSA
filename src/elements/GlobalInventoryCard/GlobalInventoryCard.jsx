import React, { useState } from 'react';
import { FiEdit, FiTrash2, FiEye, FiStar, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { useLang } from '../../utils/LangHandler';
import './GlobalInventoryCard.css';

export default function GlobalInventoryCard({ product, onEdit, onDelete, onViewDetails, onViewVendor }) {
    const { lang } = useLang();
    const [imageError, setImageError] = useState(false);

    const {
        id,
        vendorId,
        vendorName,
        vendorRating,
        basicInfo,
        specificInfo,
        pricing,
        rating
    } = product;

    const { name, serviceCategory, type, images, isActive, tags } = basicInfo;
    const { availableUnits, totalUnits, pricePerUnit, currency } = pricing;

    const stockPercentage = totalUnits > 0 ? (availableUnits / totalUnits) * 100 : 0;
    const isLowStock = stockPercentage < 30 && stockPercentage > 0;
    const isOutOfStock = availableUnits === 0;

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US').format(price);
    };

    const getStockStatus = () => {
        if (isOutOfStock) return { text: lang('inventoryCard.outOfStock'), className: 'stock-out', icon: <FiXCircle /> };
        if (isLowStock) return { text: lang('inventoryCard.lowStock'), className: 'stock-low', icon: <FiCheckCircle /> };
        return { text: lang('inventoryCard.inStock'), className: 'stock-in', icon: <FiCheckCircle /> };
    };

    const getSpecificFields = () => {
        switch (serviceCategory) {
            case 'accommodation':
                const acc = specificInfo.accommodation;
                return [
                    { icon: '👥', label: lang('inventoryCard.capacity'), value: `${acc.capacity} ${lang('common.personUnit')}` },
                    { icon: '🛏️', label: lang('inventoryCard.bedType'), value: acc.bedType },
                    { icon: '🌅', label: lang('inventoryCard.view'), value: acc.view || lang('inventoryCard.notAvailable') }
                ];
            case 'carRental':
                const car = specificInfo.carRental;
                return [
                    { icon: '🚗', label: lang('inventoryCard.model'), value: `${car.brand} ${car.model} (${car.year})` },
                    { icon: '⚙️', label: lang('inventoryCard.transmission'), value: car.transmission },
                    { icon: '⛽', label: lang('inventoryCard.fuelType'), value: car.fuelType }
                ];
            case 'restaurant':
                const res = specificInfo.restaurant;
                return [
                    { icon: '🪑', label: lang('inventoryCard.tableType'), value: res.tableType },
                    { icon: '👥', label: lang('inventoryCard.capacity'), value: `${res.capacity} ${lang('common.personUnit')}` },
                    { icon: '🍽️', label: lang('inventoryCard.mealType'), value: res.mealType?.join(', ') || lang('inventoryCard.allMeals') }
                ];
            case 'entertainment':
                const ent = specificInfo.entertainment;
                return [
                    { icon: '🎬', label: lang('inventoryCard.entertainmentType'), value: ent.entertainmentType },
                    { icon: '⏱️', label: lang('inventoryCard.duration'), value: `${ent.durationMinutes} ${lang('common.minutesUnit')}` },
                    { icon: '🧒', label: lang('inventoryCard.minAge'), value: `${ent.minAge}+` }
                ];
            default:
                return [];
        }
    };

    const specificFields = getSpecificFields();
    const stockStatus = getStockStatus();

    const renderStars = (rate) => {
        const fullStars = Math.floor(rate);
        const hasHalfStar = rate % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        return (
            <div className="card-stars">
                {[...Array(fullStars)].map((_, i) => (
                    <FiStar key={`full-${i}`} className="star star-full" />
                ))}
                {hasHalfStar && <FiStar className="star star-half" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <FiStar key={`empty-${i}`} className="star star-empty" />
                ))}
                <span className="rating-value">{rate}</span>
            </div>
        );
    };

    return (
        <div className={`global-inventory-card ${!isActive ? 'inactive' : ''} ${isOutOfStock ? 'out-of-stock' : ''}`}>
            {(!isActive || isOutOfStock) && (
                <div className="card-status-banner">
                    {!isActive ? lang('inventoryCard.inactive') : lang('inventoryCard.outOfStock')}
                </div>
            )}

            <div className="card-image">
                {images && images.length > 0 && !imageError ? (
                    <img src={images[0]} alt={name} onError={() => setImageError(true)} />
                ) : (
                    <div className="card-image-placeholder">
                        <span>📷</span>
                    </div>
                )}

                <div className="card-badges">
                    <span className={`badge-category ${serviceCategory}`}>
                        {lang(`common.services.${serviceCategory}`)}
                    </span>
                    <span className={`badge-status ${isActive ? 'active' : 'inactive'}`}>
                        {isActive ? lang('inventoryCard.active') : lang('inventoryCard.inactive')}
                    </span>
                </div>
            </div>

            <div className="card-content">
                {/* Vendor Info */}
                <div className="card-vendor">
                    <button 
                        className="vendor-link"
                        onClick={() => onViewVendor?.(vendorId)}
                    >
                        🏢 {vendorName}
                    </button>
                    <div className="vendor-rating">
                        {renderStars(vendorRating)}
                    </div>
                </div>

                <div className="card-header">
                    <h3 className="card-title">{name}</h3>
                    <span className="card-type">{type}</span>
                </div>

                {tags && tags.length > 0 && (
                    <div className="card-tags">
                        {tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="tag">#{tag}</span>
                        ))}
                    </div>
                )}

                <div className="card-rating">
                    {renderStars(rating)}
                </div>

                <div className="card-price">
                    <span className="price-value">{formatPrice(pricePerUnit)}</span>
                    <span className="price-unit">{currency === 'IRR' ? lang('common.currencyIRR') : currency}</span>
                    <span className="price-period">
                        {lang('inventoryCard.perUnit')} {serviceCategory === 'accommodation' ? lang('inventoryCard.pricePer.accommodation') : 
                         serviceCategory === 'carRental' ? lang('inventoryCard.pricePer.carRental') : 
                         serviceCategory === 'entertainment' ? lang('inventoryCard.pricePer.entertainment') : lang('inventoryCard.pricePer.restaurant')}
                    </span>
                </div>

                <div className="card-specific">
                    {specificFields.map((field, idx) => (
                        <div key={idx} className="specific-item">
                            <span className="specific-icon">{field.icon}</span>
                            <span className="specific-label">{field.label}:</span>
                            <span className="specific-value">{field.value}</span>
                        </div>
                    ))}
                </div>

                <div className="card-stock">
                    <div className="stock-header">
                        <span className="stock-label">{lang('inventoryCard.stock')}:</span>
                        <span className={`stock-value ${stockStatus.className}`}>
                            {stockStatus.icon}
                            {stockStatus.text}
                        </span>
                        <span className="stock-count">{availableUnits} / {totalUnits}</span>
                    </div>
                    <div className="stock-bar">
                        <div 
                            className={`stock-progress ${stockStatus.className}`}
                            style={{ width: `${Math.min(stockPercentage, 100)}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="card-actions">
                <button 
                    className="action-btn view-btn"
                    onClick={() => onViewDetails?.(id)}
                    title={lang('inventoryCard.actions.details')}
                >
                    <FiEye />
                    <span>{lang('inventoryCard.actions.details')}</span>
                </button>
                <button 
                    className="action-btn edit-btn"
                    onClick={() => onEdit?.(product)}
                    title={lang('inventoryCard.actions.edit')}
                >
                    <FiEdit />
                    <span>{lang('inventoryCard.actions.edit')}</span>
                </button>
                <button 
                    className="action-btn delete-btn"
                    onClick={() => onDelete?.(id)}
                    title={lang('inventoryCard.actions.delete')}
                >
                    <FiTrash2 />
                    <span>{lang('inventoryCard.actions.delete')}</span>
                </button>
            </div>
        </div>
    );
}