package de.homei.aufgabenservice

import java.sql.Date
import java.time.LocalDate
import javax.persistence.AttributeConverter
import javax.persistence.Converter

/**
 * Converter fuer Hibernate von LocalDate nach SqlDate
 */
@Converter(autoApply = true)
class LocalDateAttributeConverter : AttributeConverter<LocalDate, Date> {
    override fun convertToEntityAttribute(sqlDate: Date?): LocalDate? {
        return sqlDate?.toLocalDate()
    }

    override fun convertToDatabaseColumn(locDate : LocalDate?) : Date? {
        return  if (locDate == null) null!! else Date.valueOf(locDate)
    }
}