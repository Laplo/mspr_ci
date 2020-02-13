## Classes

<dl>
<dt><a href="#Product">Product</a></dt>
<dd><p>Database products</p></dd>
<dt><a href="#PurchaseDTO">PurchaseDTO</a></dt>
<dd><p>Dto purchase</p></dd>
<dt><a href="#Purchase">Purchase</a></dt>
<dd><p>Database purchases</p></dd>
<dt><a href="#TotalRevenue">TotalRevenue</a></dt>
<dd><p>Total revenue of a company</p></dd>
<dt><a href="#UserDTO">UserDTO</a></dt>
<dd><p>Dto purchase</p></dd>
<dt><a href="#User">User</a></dt>
<dd><p>Database users</p></dd>
<dt><a href="#CompanyService">CompanyService</a></dt>
<dd><p>Service called to get informations about companies</p></dd>
<dt><a href="#PurchaseService">PurchaseService</a></dt>
<dd><p>Service called to get informations about purchases</p></dd>
<dt><a href="#UserService">UserService</a></dt>
<dd><p>Service called to get informations about usersss</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#start">start()</a></dt>
<dd><p>Start the server</p></dd>
<dt><a href="#NameCallerArgsReturnLogControllersInfoLevel">NameCallerArgsReturnLogControllersInfoLevel(className)</a></dt>
<dd><p>Log with level info different informations about the called controller</p></dd>
<dt><a href="#NameCallerArgsReturnLogDaosInfoLevel">NameCallerArgsReturnLogDaosInfoLevel(className)</a></dt>
<dd><p>Log with level info different informations about the called dao</p></dd>
<dt><a href="#NameCallerArgsReturnLogServicesInfoLevel">NameCallerArgsReturnLogServicesInfoLevel(className)</a></dt>
<dd><p>Log with level info different informations about the called service</p></dd>
</dl>

## Interfaces

<dl>
<dt><a href="#IProduct">IProduct</a></dt>
<dd><p>Interface for classes that represent a product</p></dd>
<dt><a href="#IPurchase">IPurchase</a></dt>
<dd><p>Interface for classes that represent a purchase</p></dd>
<dt><a href="#ITotalRevenue">ITotalRevenue</a></dt>
<dd><p>Interface for classes that represent a total revenue</p></dd>
<dt><a href="#IUser">IUser</a></dt>
<dd><p>Interface for classes that represent an user</p></dd>
<dt><a href="#ICompanyService">ICompanyService</a></dt>
<dd><p>Interface for classes that represent a company service</p></dd>
<dt><a href="#IPurchaseService">IPurchaseService</a></dt>
<dd><p>Interface for classes that represent a purchase service</p></dd>
<dt><a href="#IUserService">IUserService</a></dt>
<dd><p>Interface for classes that represent an user service</p></dd>
</dl>

<a name="IProduct"></a>

## IProduct
<p>Interface for classes that represent a product</p>

**Kind**: global interface  
<a name="IPurchase"></a>

## IPurchase
<p>Interface for classes that represent a purchase</p>

**Kind**: global interface  
<a name="ITotalRevenue"></a>

## ITotalRevenue
<p>Interface for classes that represent a total revenue</p>

**Kind**: global interface  
**Since**: 1.0.1  
<a name="IUser"></a>

## IUser
<p>Interface for classes that represent an user</p>

**Kind**: global interface  
<a name="ICompanyService"></a>

## ICompanyService
<p>Interface for classes that represent a company service</p>

**Kind**: global interface  
**Since**: 1.0.1  
**Todo**

- [ ] add for differents companies

<a name="IPurchaseService"></a>

## IPurchaseService
<p>Interface for classes that represent a purchase service</p>

**Kind**: global interface  
<a name="IUserService"></a>

## IUserService
<p>Interface for classes that represent an user service</p>

**Kind**: global interface  
<a name="Product"></a>

## Product
<p>Database products</p>

**Kind**: global class  
**Implements**: [<code>IProduct</code>](#IProduct)  
**Access**: public  
<a name="new_Product_new"></a>

### new Product()
<p>Creates a new Product</p>

<a name="PurchaseDTO"></a>

## PurchaseDTO
<p>Dto purchase</p>

**Kind**: global class  
**Implements**: [<code>IPurchase</code>](#IPurchase)  
<a name="new_PurchaseDTO_new"></a>

### new PurchaseDTO()
<p>Creates a new PurchaseDTO</p>

<a name="Purchase"></a>

## Purchase
<p>Database purchases</p>

**Kind**: global class  
**Implements**: [<code>IPurchase</code>](#IPurchase)  
**Access**: public  
<a name="new_Purchase_new"></a>

### new Purchase()
<p>Creates a new Purchase</p>

<a name="TotalRevenue"></a>

## TotalRevenue
<p>Total revenue of a company</p>

**Kind**: global class  
**Implements**: [<code>ITotalRevenue</code>](#ITotalRevenue)  
**Access**: public  
**Since**: 1.0.1  
<a name="new_TotalRevenue_new"></a>

### new TotalRevenue()
<p>Creates a new TotalRevenue</p>

<a name="UserDTO"></a>

## UserDTO
<p>Dto purchase</p>

**Kind**: global class  
**Implements**: [<code>IUser</code>](#IUser)  
<a name="new_UserDTO_new"></a>

### new UserDTO()
<p>Creates a new UserDTO</p>

<a name="User"></a>

## User
<p>Database users</p>

**Kind**: global class  
**Implements**: [<code>IUser</code>](#IUser)  
**Access**: public  
<a name="new_User_new"></a>

### new User()
<p>Creates a new User</p>

<a name="CompanyService"></a>

## CompanyService
<p>Service called to get informations about companies</p>

**Kind**: global class  
**Implements**: [<code>ICompanyService</code>](#ICompanyService)  
**Since**: 1.0.1  
<a name="new_CompanyService_new"></a>

### new CompanyService()
<p>Creates a new CompanyService</p>

<a name="PurchaseService"></a>

## PurchaseService
<p>Service called to get informations about purchases</p>

**Kind**: global class  
**Implements**: [<code>IPurchaseService</code>](#IPurchaseService)  
<a name="new_PurchaseService_new"></a>

### new PurchaseService()
<p>Creates a new PurchaseService</p>

<a name="UserService"></a>

## UserService
<p>Service called to get informations about usersss</p>

**Kind**: global class  
**Implements**: [<code>IUserService</code>](#IUserService)  
<a name="new_UserService_new"></a>

### new UserService()
<p>Creates a new UserService</p>

<a name="start"></a>

## start()
<p>Start the server</p>

**Kind**: global function  
<a name="NameCallerArgsReturnLogControllersInfoLevel"></a>

## NameCallerArgsReturnLogControllersInfoLevel(className)
<p>Log with level info different informations about the called controller</p>

**Kind**: global function  
**Version**: 1.0.0  

| Param |
| --- |
| className | 

<a name="NameCallerArgsReturnLogDaosInfoLevel"></a>

## NameCallerArgsReturnLogDaosInfoLevel(className)
<p>Log with level info different informations about the called dao</p>

**Kind**: global function  
**Version**: 1.0.0  

| Param |
| --- |
| className | 

<a name="NameCallerArgsReturnLogServicesInfoLevel"></a>

## NameCallerArgsReturnLogServicesInfoLevel(className)
<p>Log with level info different informations about the called service</p>

**Kind**: global function  
**Version**: 1.0.0  

| Param |
| --- |
| className | 

