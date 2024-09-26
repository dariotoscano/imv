import axios from "axios";
import axiosRetry from 'axios-retry';
const apiHost = process.env.NEXT_PUBLIC_BACKEND_URL;
import {getStoryblokApi,storyblokInit, apiPlugin} from "@storyblok/react";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin]
});

const api = {
  reRoute: async function({uri, hash, language}) {
    var endpoint = new URL(`${apiHost}/routing/${language.locale}/redirect`);
    if (uri) endpoint.searchParams.append('uri', decodeURIComponent(uri));
    if (hash) endpoint.searchParams.append('hash', hash);
    const res = await fetch(endpoint.href);
    if (res.status == 200) {
      return await res.json();
    }
    return null;
  },
  getSettings: async function({storeview}) {
    try {
      const res = await axios.get(`${apiHost}/core/${storeview.id}/settings?country_id=${storeview.country.id}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  getCategory: async function({id, storeview}) {
    try {
      const res = await axios.get(`${apiHost}/core/${storeview.id}/categories/${id}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  getCategories: async function({storeview}) {
    try {
      const res = await axios.get(`${apiHost}/core/${storeview.id}/categories`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  getPage: async function({id, storeview}) {
    try {
      const res = await axios.get(`${apiHost}/core/${storeview.id}/pages/${id}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  fetchPage: async function({id, storeview}) {
    var endpoint = new URL(`${apiHost}/core/${storeview.id}/pages/${id}`);
    const res = await fetch(endpoint.href);
    if (res.status == 200) {
      return await res.json();
    }
    return null;
  },
  fetchCategory: async function({id, storeview}) {
    var endpoint = new URL(`${apiHost}/core/${storeview.id}/categories/${id}`);
    const res = await fetch(endpoint.href);
    if (res.status == 200) {
      return await res.json();
    }
    return null;
  },
  getCollection: async function({id, storeview}) {
    try {
      const res = await axios.get(`${apiHost}/core/${storeview.id}/collections/${id}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  getCollections: async function({storeview}) {
    try {
      const res = await axios.get(`${apiHost}/core/${storeview.id}/collections`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  fetchCollection: async function({id, storeview}) {
    var endpoint = new URL(`${apiHost}/core/${storeview.id}/collections/${id}`);
    const res = await fetch(endpoint.href);
    if (res.status == 200) {
      return await res.json();
    }
    return null;
  },
  getBrands: async function({storeview}) {
    try {
      const res = await axios.get(`${apiHost}/core/${storeview.id}/brands`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  getBrand: async function({id, storeview}) {
    try {
      const res = await axios.get(`${apiHost}/core/${storeview.id}/brands/${id}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  fetchBrand: async function({id, storeview}) {
    var endpoint = new URL(`${apiHost}/core/${storeview.id}/brands/${id}`);
    const res = await fetch(endpoint.href);
    if (res.status == 200) {
      return await res.json();
    }
    return null;
  },
  getDesigners: async function({storeview}) {
    try {
      const res = await axios.get(`${apiHost}/core/${storeview.id}/designers`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  getDesigner: async function({id, storeview}) {
    try {
      const res = await axios.get(`${apiHost}/core/${storeview.id}/designers/${id}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  fetchDesigner: async function({id, storeview}) {
    var endpoint = new URL(`${apiHost}/core/${storeview.id}/designers/${id}`);
    const res = await fetch(endpoint.href);
    if (res.status == 200) {
      return await res.json();
    }
    return null;
  },
  getProductsSitemap: async function({storeview,limit,offset}) {
    try {
      const res = await axios.get(`${apiHost}/core/${storeview.id}/products/sitemap?limit=${limit}&offset=${offset}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  getProduct: async function({id, storeview,cgId}) {
    try {
      const res = await axios.get(`${apiHost}/core/${storeview.id}/products/${id}?country_id=${storeview.country.id}${(cgId) ? `&cgid=${cgId}` : ``}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  getProductUrls: async function({id}) {
    try {
      const res = await axios.get(`${apiHost}/core/products/${id}/url`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  fetchProduct: async function({id, storeview}) {
    var endpoint = new URL(`${apiHost}/core/${storeview.id}/products/${id}?country_id=${storeview.country.id}`);
    const res = await fetch(endpoint.href);
    if (res.status == 200) {
      return await res.json();
    }
    return null;
  },
  storeLead: async function({storeview, data}) {
    try {
      const type = (data?.product_id) ? 'products' : 'contact-us';
      const res = await axios.post(`${apiHost}/core/email/form/${type}`,data);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  createCart: async function({ storeview, products, currency, ip=""}) {
    try {
      const data = {
        country_id: storeview.country.id,
        currency: currency,
        order_lines: products.map((product) => { return {
          product_id: product.id,
          qty:product.qty,
          custom_options: product.options
        }})
      }
      const res = await axios.post(`${apiHost}/core/${storeview.id}/carts?country_id=${storeview.country.id}&ip_address=${ip}`, data);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  getCart: async function({ storeview, token }) {
    try {
      const res = await axios.get(`${apiHost}/core/${storeview.id}/carts/${token}?country_id=${storeview.country.id}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  getShippingMethods: async function({ storeview, token }) {
    try {
      const res = await axios.get(`${apiHost}/core/${storeview.id}/shipping/cart`, {
        params: {
          access_token: token
          //countryId: storeview.country.id
        }
      });
      return res.data;
    } catch (error) {
      return [];
    }
  },
  getPaymentMethods: async function({storeview, token}) {
    try {
      const res = await axios.post(`${apiHost}/core/payment/sessions`, {
        cart_token: token,
        website: storeview.store.internalCode,
        country: storeview.country.code,
        lang: storeview.language.localeAlt
      });
      return res.data;
    } catch (error) {
      return [];
    }
  },
  initPayment: async function({storeview, token, type, redirect, payload}) {
    try {
      const data = {
        cart_token: token,
        type,
        locale: storeview.language.code,
        lang: storeview.language.localeAlt,
        purchase_country: storeview.country.code,
        redirect: redirect
      }
      if (payload) data.payload = payload;
      const res = await axios.post(`${apiHost}/core/payment/transactions`, data);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  submitPayment: async function({transactionId,payload}) {
    try {
      const data = {
        transaction_id: transactionId
      }
      if (payload) data.payload = payload;
      const res = await axios.post(`${apiHost}/core/payment/confirmations`, data);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  updateCart: async function({ storeview, token, data }) {
    try {
      const res = await axios.put(`${apiHost}/core/${storeview.id}/carts/${token}?country_id=${storeview.country.id}`, data);
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  applyCouponCode: async function({ storeview, token, code }) {
    try {
      const res = await axios.put(`${apiHost}/core/${storeview.id}/carts/${token}/coupons/${code}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  removeCouponCode: async function({ storeview, token }) {
    try {
      const res = await axios.delete(`${apiHost}/core/${storeview.id}/carts/${token}/coupons`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  addCartLines: async function({ storeview, token, products }) {
    try {
      const res = await axios.post(`${apiHost}/core/${storeview.id}/carts/${token}/lines?country_id=${storeview.country.id}`,
        {
          order_lines: products.map((product) => { return {
            product_id: product.id,
            qty:product.qty,
            custom_options: product.options
          }})
        }
      );
      return res.data;
    } catch (error) {
      return null;
    }
  },
  updateCartLine: async function({ storeview, token, lineId, quantity }) {
    try {
      const res = await axios.put(`${apiHost}/core/${storeview.id}/carts/${token}/lines/${lineId}?country_id=${storeview.country.id}`,
        {
          qty: quantity
        }
      );
      return res.data;
    } catch (error) {
      return null;
    }
  },
  removeCartLine: async function({ storeview, token, lineId }) {
    try {
      const res = await axios.delete(`${apiHost}/core/${storeview.id}/carts/${token}/lines/${lineId}?country_id=${storeview.country.id}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  getUser: async function({ storeview, userId }) {
    try {
      const res = await axios.get(`${apiHost}/core/${(storeview) ? storeview.id : 'base_it'}/customers/${userId}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  forceGetUser: async function({ storeview, userId, retry }) {
    try {
      const client = axios.create();
      axiosRetry(client, {
        retries: 7,
        retryDelay: axiosRetry.exponentialDelay,
        retryCondition: (error) => {
          return error.response.status == '400' || error.response.status == '404';
        }
      });
      const res = await client.get(`${apiHost}/core/${(storeview) ? storeview.id : 'base_it'}/customers/${userId}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  editUser: async function({ storeview, userId, data }) {
    try {
      const res = await axios.put(`${apiHost}/core/${(storeview) ? storeview.id : 'base_it'}/customers/${userId}`,data);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  addUserAddress: async function({ storeview, userId, data }) {
    try {
      const res = await axios.post(`${apiHost}/core/${storeview.id}/customers/${userId}/subcontacts`, data);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  getUserAddress: async function({ storeview, userId, addressId }) {
    try {
      const res = await axios.get(`${apiHost}/core/${storeview.id}/customers/${userId}/subcontacts/${addressId}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  editUserAddress: async function({ storeview, userId, addressId, data }) {
    try {
      const res = await axios.put(`${apiHost}/core/${storeview.id}/customers/${userId}/subcontacts/${addressId}`, data);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  removeUserAddress: async function({ storeview, userId, addressId }) {
    try {
      const res = await axios.delete(`${apiHost}/core/${storeview.id}/customers/${userId}/subcontacts/${addressId}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  getOrders: async function({ storeview, params }) {
    try {
      //if (params.uid) delete(params.uid);
      //if (params.start_date) delete(params.start_date);
      params.response_type = 'complete';
      const res = await axios.get(`${apiHost}/core/${storeview.id}/orders`,{params});
      return res.data;
    } catch (error) {
      return {total:0,orders:[]};
    }
  },
  getOrder: async function({ storeview, identifier, core }) {
    try {
      const params = {}
      if (core) params.only_core = true;
      const res = await axios.get(`${apiHost}/core/${storeview.id}/orders/${identifier}`,{params});
      return res.data;
    } catch (error) {
      return null;
    }
  },
  getWishlists: async function({ storeview, userId }) {
    try {
      const res = await axios.get(`${apiHost}/core/${storeview.id}/wishlists?uid=${userId}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  getWishlist: async function({ storeview, wishlistId }) {
    try {
      const res = await axios.get(`${apiHost}/core/${storeview.id}/wishlists/${wishlistId}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  createWishlist: async function({ storeview, userId, name, productId }) {
    try {
      const res = await axios.post(`${apiHost}/core/${storeview.id}/wishlists?uid=${userId}`,{
        name: name,
        product_id: productId
      });
      return res.data;
    } catch (error) {
      return null;
    }
  },
  addToWishlist: async function({ storeview, wishlistId, productId }) {
    try {
      const res = await axios.put(`${apiHost}/core/${storeview.id}/wishlists/${wishlistId}`,{
        product_id: productId
      });
      return res.data;
    } catch (error) {
      return null;
    }
  },
  removeFromWishlist: async function({ storeview, wishlistId, productId }) {
    try {
      const res = await axios.delete(`${apiHost}/core/${storeview.id}/wishlists/${wishlistId}/${productId}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  removeWishlist: async function({ storeview, wishlistId }) {
    try {
      const res = await axios.delete(`${apiHost}/core/${storeview.id}/wishlists/${wishlistId}`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  validateCreditCard: async function(data) {
    try {
      const res = await axios.post(`${apiHost}/core/payment/credit_card/check`,data);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  getPaypalClientToken: async function() {
    try {
      const res = await axios.get(`${apiHost}/core/payment/paypal/client-token`);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  initializePaypal: async function(data) {
    try {
      const res = await axios.post(`${apiHost}/core/payment/paypal/initialize`, data);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  initializeKlarna: async function({token,redirect}) {
    const params = {
      cart_token: token,
      redirect: redirect
    }
    try {
      const res = await axios.get(`${apiHost}/core/payment/klarna/initialize`, {params});
      return res.data;
    } catch (error) {
      return null;
    }
  },
  getBoards: async ({storeview, filters, ...params}) => {
    try {
      const payload = {
        lang: storeview.language.inspireCode,
        ...params
      }
      if (filters) {
        filters.forEach((f) => {
          payload[f.key] = f.values.join(",");
        });
      }
      const res = await axios.get("https://api.shopmohd.dev/v1/mohdboard/boards", {
        params: payload,
        headers: {
          'X-API-KEY':'6b021021-2969-4aa9-89c3-3f9176272059',
          'Accept-Encoding': 'deflate'
        }
      });
      const data = res.data;
      return data.rows;
    } catch (error) {
      return []
    }
  },
  getBlogPosts: async ({storeview,postIds}) => {
    const params = {};
    let lang = 'en';
    if (storeview.locale == 'it') lang = 'it';
    params.lang = lang;
    if (postIds) {
      params.include = postIds.join(",");
      params.orderby = 'include';
    }
    try {
      const res = await axios.get("https://www.mohd.it/wp-json/wp/v2/posts", {
        params,
        headers: {
          'Accept-Encoding': 'deflate'
        }
      });
      const data = res.data;
      return data;
    } catch (error) {
      return []
    }
  },
  getStoryblokStory: async({slug, storeview}) => {
    try {
      let sbParams = {
        version: "publish",
        resolve_relations: ["mohd_experience.lookbooks","lookbooks.lookbooks","lookbook_tab.lookbook"],
        language: storeview.locale
      };
      if (slug && (slug.startsWith('/'))) slug = slug.substring(1);
      const storyblokApi = getStoryblokApi();
      let {data} = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
      if (data && data?.story) return data.story;
      return null
    } catch(e) {
      return null;
    }
  },
  getShippingQuotes: async function({storeview, price, weight, quantity, customer_group_id, product_id}) {
    try {
      const params = {
        price: price,
        weight: weight,
        quantity: quantity,
        country_id: storeview.country.id
      }
      if (customer_group_id) params.customer_group_id = customer_group_id;
      if (product_id) params.product_id = product_id;
      const res = await axios.get(`${apiHost}/core/${storeview.id}/shipping/quotes`, {params});
      return res.data;
    } catch (error) {
      return [];
    }
  },
  initExpressPayment: async function({storeview, type, redirect, productId, options, currency, qty, userId}) {
    try {
      const payload = {
        product_id:productId,
        store: storeview.id,
        country_id: storeview.country.id,
        currency,
        website_id: storeview.store.id,
        qty,
        custom_options: options
      }
      const data = {
        type,
        locale: storeview.language.code,
        purchase_country: storeview.country.code,
        redirect,
        keycloak_id: userId,
        payload
      }
      const res = await axios.post(`${apiHost}/core/payment/transactions/express`, data);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  patchExpressPayment: async function({transactionId}) {
    try {
      const res = await axios.patch(`${apiHost}/core/payment/transactions/express?transaction_id=${transactionId}`);
      return true;
    } catch (error) {
      return false;
    }
  },
  attachFileRma: async function() {
    try {
      const res = await axios.post(`https://mohdshop.zendesk.com/https://{subdomain}.zendesk.com/api/v2/uploads?filename=test.jpg`);
      return true;
    } catch (error) {
      return false;
    }
  },
  redirect: async function(obj, storeview) {
    const type = obj.type;
    const target = obj.target;
    if (type == 'product') {
      const productRedirect = await this.getProduct({id:target, storeview});
      if (productRedirect) {
        if (productRedirect.redirect_type === 0) return api.redirect(productRedirect,storeview);
        return {
          redirect: {
            destination: `/${storeview.locale}/${productRedirect.url_keys[storeview.locale]}.html`,
            permanent: true
          }
        }
      }
    }
    if (type == 'category') {
      const categoryRedirect = await this.getCategory({id:target, storeview});
      if (categoryRedirect) {
        if (categoryRedirect.redirect_type === 0) return api.redirect(categoryRedirect,storeview);
        return {
          redirect: {
            destination: `/${storeview.locale}/${categoryRedirect.full_paths[storeview.locale]}.html`,
            permanent: true
          }
        }
      }
    }
    if (type == 'collection') {
      const collectionRedirect = await this.getCollection({id:target, storeview});
      if (collectionRedirect) {
        if (collectionRedirect.redirect_type === 0) return api.redirect(collectionRedirect,storeview);
        if (collectionRedirect?.brand && collectionRedirect?.brand.id) {
          return {
            redirect: {
              destination: `/${storeview.locale}/${storeview.language.brands_slug}/${collectionRedirect.full_paths[storeview.locale]}.html`,
              permanent: true
            }
          }
        }
        return {
          redirect: {
            destination: `/${storeview.locale}/${collectionRedirect.full_paths[storeview.locale]}.html`,
            permanent: true
          }
        }
      }
    }
    if (type == 'brand') {
      const brandRedirect = await api.getBrand({id:target, storeview});
      if (brandRedirect) {
        if (brandRedirect.redirect_type === 0) return api.redirect(brandRedirect,storeview);
        return {
          redirect: {
            destination: `/${storeview.locale}/${storeview.language.brands_slug}/${brandRedirect.url_keys[storeview.locale]}.html`,
            permanent: true
          }
        }
      }
    }
    if (type == 'designer') {
      const designerRedirect = await api.getDesigner({id:target, storeview});
      if (designerRedirect) {
        if (designerRedirect?.redirect_type === 0) return api.redirect(designerRedirect,storeview);
        return {
          redirect: {
            destination: `/${storeview.locale}/${storeview.language.designers_slug}/${designerRedirect.url_keys[storeview.locale]}.html`,
            permanent: true
          }
        }
      }
    }
    if (type == 'custom') {
      return {
        redirect: {
          destination: `/${storeview.locale}/${target}`,
          permanent: true
        }
      }
    }
    return {
      notFound: true,
      revalidate: 60
    };
  },
  createGuestCustomer: async function({storeview, data, token}) {
    try {
      const _data = {
        country_id: storeview.country.id,
        lang: storeview.language.code,
        website_id: storeview.store.id,
        ...data
      }
      const res = await axios.post(`${apiHost}/core/${storeview.id}/customers/guest/${token}`, _data);
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default api;
