using {API_BUSINESS_PARTNER as my} from './external/API_BUSINESS_PARTNER';
service CatalogService {
    @readonly
    entity A_AddressEmailAddress as projection on my.A_AddressEmailAddress;
}