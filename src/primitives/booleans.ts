
// src/domains/booleans.ts
import type { Bool, BrandAll } from '../core';
import { makeBool } from '../core';

/** FLAGS */
type FlagNames = 'IsDisable' | 'IsDone' | 'HasAllergies';
type _Flags = BrandAll<boolean, FlagNames>;

export type IsDisable = _Flags['IsDisable'];
export type IsDone = _Flags['IsDone'];
export type HasAllergies = _Flags['HasAllergies'];

export const IsDisable = makeBool('IsDisable');
export const IsDone = makeBool('IsDone');
export const HasAllergies = makeBool('HasAllergies');

/** DECISIONS */
type DecisionNames = 'StoreData' | 'SendReminders' | 'SendNps';
type _Decisions = BrandAll<boolean, DecisionNames>;

export type StoreData = _Decisions['StoreData'];
export type SendReminders = _Decisions['SendReminders'];
export type SendNps = _Decisions['SendNps'];

export const StoreData = makeBool('StoreData');
export const SendReminders = makeBool('SendReminders');
export const SendNps = makeBool('SendNps');

/** CALENDAR TOGGLES (views) */
type CalendarToggleNames =
  | 'ShowAgendaViewCalendar'
  | 'ShowMonthViewCalendar'
  | 'ShowWeekViewCalendar'
  | 'ShowDayViewCalendar';

type _CalendarToggles = BrandAll<boolean, CalendarToggleNames>;

export type ShowAgendaViewCalendar = _CalendarToggles['ShowAgendaViewCalendar'];
export type ShowMonthViewCalendar  = _CalendarToggles['ShowMonthViewCalendar'];
export type ShowWeekViewCalendar   = _CalendarToggles['ShowWeekViewCalendar'];
export type ShowDayViewCalendar    = _CalendarToggles['ShowDayViewCalendar'];

export const ShowAgendaViewCalendar = makeBool('ShowAgendaViewCalendar');
export const ShowMonthViewCalendar  = makeBool('ShowMonthViewCalendar');
export const ShowWeekViewCalendar   = makeBool('ShowWeekViewCalendar');
export const ShowDayViewCalendar    = makeBool('ShowDayViewCalendar');

/** REMINDER TOGGLES (moment x channel) */
type ReminderMoment = 'OneHour' | 'OneDay' | 'InDay';
type Channel        = 'Whatsapp' | 'Email' | 'Sms';

type ReminderToggleNames = `${ReminderMoment}${Channel}`;
type NpsToggleNames = `Nps${Channel}`;
type AllReminderNames = ReminderToggleNames | NpsToggleNames;

type _ReminderToggles = BrandAll<boolean, AllReminderNames>;

export type ReminderOneHour = Bool<'ReminderOneHour'>;
export type ReminderOneDay  = Bool<'ReminderOneDay'>;
export type ReminderInDay   = Bool<'ReminderInDay'>;

export type OneHourWhatsapp = _ReminderToggles['OneHourWhatsapp'];
export type OneHourEmail    = _ReminderToggles['OneHourEmail'];
export type OneHourSms      = _ReminderToggles['OneHourSms'];

export type OneDayWhatsapp  = _ReminderToggles['OneDayWhatsapp'];
export type OneDayEmail     = _ReminderToggles['OneDayEmail'];
export type OneDaySms       = _ReminderToggles['OneDaySms'];

export type InDayWhatsapp   = _ReminderToggles['InDayWhatsapp'];
export type InDayEmail      = _ReminderToggles['InDayEmail'];
export type InDaySms        = _ReminderToggles['InDaySms'];

export type NpsWhatsapp     = _ReminderToggles['NpsWhatsapp'];
export type NpsEmail        = _ReminderToggles['NpsEmail'];
export type NpsSms          = _ReminderToggles['NpsSms'];

export const OneHourWhatsapp = makeBool('OneHourWhatsapp');
export const OneHourEmail = makeBool('OneHourEmail');
export const OneHourSms = makeBool('OneHourSms');
export const OneDayWhatsapp = makeBool('OneDayWhatsapp');
export const OneDayEmail = makeBool('OneDayEmail');
export const OneDaySms = makeBool('OneDaySms');
export const InDayWhatsapp = makeBool('InDayWhatsapp');
export const InDayEmail = makeBool('InDayEmail');
export const InDaySms = makeBool('InDaySms');
export const NpsWhatsapp = makeBool('NpsWhatsapp');
export const NpsEmail = makeBool('NpsEmail');
export const NpsSms = makeBool('NpsSms');

/** CONSENTS / PERMISSIONS */
type ConsentNames =
  | 'Ai'
  | 'AiWhatsapp'
  | 'ConsultationTypePermission'
  | 'CrmPermission'
  | 'ConnectionsPermission'
  | 'UserPermissionsEdit'
  | 'MarketingPermission';

type _Consents = BrandAll<boolean, ConsentNames>;

export type Ai                         = _Consents['Ai'];
export type AiWhatsapp                 = _Consents['AiWhatsapp'];
export type ConsultationTypePermission = _Consents['ConsultationTypePermission'];
export type CrmPermission              = _Consents['CrmPermission'];
export type ConnectionsPermission      = _Consents['ConnectionsPermission'];
export type UserPermissionsEdit        = _Consents['UserPermissionsEdit'];
export type MarketingPermission        = _Consents['MarketingPermission'];

export const Ai = makeBool('Ai');
export const AiWhatsapp = makeBool('AiWhatsapp');
export const ConsultationTypePermission = makeBool('ConsultationTypePermission');
export const CrmPermission = makeBool('CrmPermission');
export const ConnectionsPermission = makeBool('ConnectionsPermission');
export const UserPermissionsEdit = makeBool('UserPermissionsEdit');
export const MarketingPermission = makeBool('MarketingPermission');