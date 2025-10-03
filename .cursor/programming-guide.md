# Programming Guide

## Lenovo4Good Development Standards

This guide establishes coding standards and best practices for the Lenovo4Good project across multiple programming languages.

---

## Table of Contents

1. [General Principles](#general-principles)
2. [JavaScript](#javascript)
3. [C#](#c)
4. [Swift](#swift)
5. [C++](#c-1)
6. [Comment Structure](#comment-structure)
7. [Version Control](#version-control)

---

## General Principles

### Core Values
- **Readability:** Code is read more often than written
- **Consistency:** Follow established patterns
- **Simplicity:** Keep it simple and straightforward
- **Maintainability:** Write code that's easy to maintain
- **Testability:** Design for testing from the start

### Best Practices
- Write self-documenting code with clear variable and function names
- Follow DRY (Don't Repeat Yourself) principle
- Use meaningful names that reveal intent
- Keep functions small and focused (single responsibility)
- Avoid premature optimization
- Write tests for all critical functionality
- Handle errors gracefully
- Document complex logic

---

## JavaScript

### Style Guide
We follow the **Airbnb JavaScript Style Guide** with some project-specific modifications.

### Naming Conventions
```javascript
// Variables and functions: camelCase
const userName = 'John';
function getUserData() { }

// Classes: PascalCase
class UserAccount { }

// Constants: UPPER_SNAKE_CASE
const MAX_RETRY_ATTEMPTS = 3;

// Private fields: prefix with underscore
class Example {
  _privateField = 'value';
}
```

### Code Structure

**Modern ES6+ Syntax**
```javascript
// Use const/let, not var
const immutableValue = 10;
let mutableValue = 20;

// Arrow functions for callbacks
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

// Template literals
const greeting = `Hello, ${userName}!`;

// Destructuring
const { name, age } = user;
const [first, second] = array;

// Spread operator
const newArray = [...oldArray, newItem];
const newObject = { ...oldObject, newProp: value };
```

**Async/Await**
```javascript
// Prefer async/await over promises
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
}
```

### Comments
```javascript
/**
 * Retrieves user data from the API
 * @param {string} userId - The unique identifier of the user
 * @returns {Promise<Object>} User data object
 * @throws {Error} If the API request fails
 */
async function getUserData(userId) {
  // Validate input
  if (!userId) {
    throw new Error('userId is required');
  }
  
  // Fetch data from API
  const response = await fetch(`/api/users/${userId}`);
  return response.json();
}
```

### File Organization
```
src/
├── components/     # React/Vue components
├── services/       # API and business logic
├── utils/          # Helper functions
├── constants/      # Application constants
├── types/          # TypeScript definitions
└── tests/          # Test files
```

---

## C#

### Style Guide
We follow **Microsoft's C# Coding Conventions** and **.NET Design Guidelines**.

### Naming Conventions
```csharp
// Classes, interfaces, methods: PascalCase
public class UserAccount { }
public interface IUserService { }
public void ProcessData() { }

// Private fields: _camelCase with underscore prefix
private string _userName;
private int _userId;

// Properties: PascalCase
public string UserName { get; set; }
public int UserId { get; set; }

// Local variables and parameters: camelCase
public void CalculateTotal(int itemCount, decimal price)
{
    decimal totalPrice = itemCount * price;
}

// Constants: PascalCase
public const int MaxRetryAttempts = 3;
```

### Code Structure

**Properties and Methods**
```csharp
public class UserService
{
    private readonly IUserRepository _userRepository;
    private readonly ILogger<UserService> _logger;
    
    // Constructor injection
    public UserService(IUserRepository userRepository, ILogger<UserService> logger)
    {
        _userRepository = userRepository ?? throw new ArgumentNullException(nameof(userRepository));
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }
    
    /// <summary>
    /// Retrieves a user by their unique identifier
    /// </summary>
    /// <param name="userId">The unique identifier of the user</param>
    /// <returns>A User object if found, null otherwise</returns>
    /// <exception cref="ArgumentException">Thrown when userId is invalid</exception>
    public async Task<User> GetUserByIdAsync(int userId)
    {
        if (userId <= 0)
        {
            throw new ArgumentException("User ID must be positive", nameof(userId));
        }
        
        try
        {
            return await _userRepository.GetByIdAsync(userId);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Failed to retrieve user {UserId}", userId);
            throw;
        }
    }
}
```

**Using Statements**
```csharp
// Use 'using' statements for IDisposable
using (var connection = new SqlConnection(connectionString))
{
    // Work with connection
}

// Or modern syntax (C# 8.0+)
using var connection = new SqlConnection(connectionString);
```

**LINQ and Modern C#**
```csharp
// Use LINQ for collection operations
var activeUsers = users
    .Where(u => u.IsActive)
    .OrderBy(u => u.LastName)
    .Select(u => new UserDto 
    { 
        Id = u.Id, 
        Name = u.FullName 
    })
    .ToList();

// Pattern matching
var result = value switch
{
    0 => "Zero",
    > 0 => "Positive",
    < 0 => "Negative"
};
```

### File Organization
```
src/
├── Controllers/        # API controllers
├── Services/          # Business logic
├── Repositories/      # Data access
├── Models/            # Domain models
├── DTOs/              # Data transfer objects
├── Interfaces/        # Interface definitions
└── Tests/             # Unit tests
```

---

## Swift

### Style Guide
We follow the **Swift API Design Guidelines** and **Ray Wenderlich Swift Style Guide**.

### Naming Conventions
```swift
// Classes, structs, protocols, enums: PascalCase
class UserAccount { }
struct UserProfile { }
protocol UserServiceProtocol { }
enum UserStatus { }

// Functions, variables, constants: camelCase
func getUserData() { }
var userName: String
let userId: Int

// Type names should be clear and unambiguous
class NetworkManager { }  // Good
class Manager { }          // Too generic
```

### Code Structure

**Properties and Methods**
```swift
class UserService {
    // MARK: - Properties
    
    private let networkManager: NetworkManager
    private var users: [User] = []
    
    // MARK: - Initialization
    
    init(networkManager: NetworkManager) {
        self.networkManager = networkManager
    }
    
    // MARK: - Public Methods
    
    /// Retrieves user data from the API
    /// - Parameter userId: The unique identifier of the user
    /// - Returns: A User object if found
    /// - Throws: NetworkError if the request fails
    func fetchUser(userId: Int) async throws -> User {
        guard userId > 0 else {
            throw ValidationError.invalidUserId
        }
        
        let endpoint = "/api/users/\(userId)"
        return try await networkManager.fetch(User.self, from: endpoint)
    }
    
    // MARK: - Private Methods
    
    private func validateUser(_ user: User) -> Bool {
        return !user.name.isEmpty && user.email.contains("@")
    }
}
```

**Optionals and Error Handling**
```swift
// Use optional binding
if let user = optionalUser {
    print(user.name)
}

// Guard statements for early returns
guard let user = optionalUser else {
    return
}

// Error handling
do {
    let user = try await fetchUser(userId: 123)
    print(user.name)
} catch {
    print("Failed to fetch user: \(error)")
}
```

**Modern Swift Features**
```swift
// Async/await
func loadData() async throws -> [User] {
    let users = try await networkManager.fetchUsers()
    return users.filter { $0.isActive }
}

// Property wrappers
@Published var userName: String = ""
@State private var isLoading = false

// Result builders
@ViewBuilder
var userView: some View {
    if isLoading {
        ProgressView()
    } else {
        UserDetailView(user: user)
    }
}
```

### File Organization
```
Sources/
├── Models/            # Data models
├── Views/             # SwiftUI views
├── ViewModels/        # View models
├── Services/          # Business logic
├── Networking/        # Network layer
├── Utilities/         # Helper functions
└── Resources/         # Assets and strings
```

---

## C++

### Style Guide
We follow **Google C++ Style Guide** with modern C++ (C++17/20) features.

### Naming Conventions
```cpp
// Classes and structs: PascalCase
class UserAccount { };
struct UserProfile { };

// Functions and variables: snake_case
void process_user_data();
int user_count = 0;

// Member variables: snake_case with trailing underscore
class UserService {
private:
    std::string user_name_;
    int user_id_;
};

// Constants: kPascalCase
const int kMaxRetryAttempts = 3;

// Namespaces: lowercase
namespace accessibility {
namespace tracking {
    // ...
}
}
```

### Code Structure

**Classes and Methods**
```cpp
/**
 * @brief Manages user authentication and session data
 * 
 * This class provides methods for user login, logout, and session management.
 * It uses secure authentication protocols and maintains session state.
 */
class UserManager {
public:
    /**
     * @brief Constructs a UserManager with the specified configuration
     * @param config Configuration object containing authentication settings
     */
    explicit UserManager(const Config& config);
    
    // Disable copy constructor and assignment operator
    UserManager(const UserManager&) = delete;
    UserManager& operator=(const UserManager&) = delete;
    
    // Enable move constructor and assignment operator
    UserManager(UserManager&&) = default;
    UserManager& operator=(UserManager&&) = default;
    
    /**
     * @brief Authenticates a user with the provided credentials
     * @param username The username
     * @param password The password
     * @return true if authentication successful, false otherwise
     * @throws AuthenticationException if authentication service unavailable
     */
    bool authenticate_user(const std::string& username, 
                          const std::string& password);
    
    ~UserManager() = default;

private:
    std::unique_ptr<AuthService> auth_service_;
    std::string session_token_;
    
    bool validate_credentials(const std::string& username,
                            const std::string& password);
};
```

**Modern C++ Features**
```cpp
// Smart pointers (prefer over raw pointers)
auto user = std::make_unique<User>();
auto shared_config = std::make_shared<Config>();

// Range-based for loops
for (const auto& user : users) {
    process_user(user);
}

// Auto keyword for type inference
auto result = calculate_total(items);

// Lambda functions
auto filter_active = [](const User& u) { return u.is_active(); };
auto active_users = std::copy_if(users.begin(), users.end(), 
                                 back_inserter(result), filter_active);

// Structured bindings (C++17)
auto [name, age] = get_user_info();

// std::optional for nullable values
std::optional<User> find_user(int id);

// Move semantics
std::vector<Data> data = std::move(temp_data);
```

**RAII Pattern**
```cpp
// Resource Acquisition Is Initialization
class FileHandler {
public:
    explicit FileHandler(const std::string& filename)
        : file_(fopen(filename.c_str(), "r")) {
        if (!file_) {
            throw std::runtime_error("Failed to open file");
        }
    }
    
    ~FileHandler() {
        if (file_) {
            fclose(file_);
        }
    }
    
    // Delete copy, allow move
    FileHandler(const FileHandler&) = delete;
    FileHandler& operator=(const FileHandler&) = delete;
    FileHandler(FileHandler&&) = default;
    FileHandler& operator=(FileHandler&&) = default;

private:
    FILE* file_;
};
```

### File Organization
```
src/
├── include/           # Header files (.h, .hpp)
├── src/              # Implementation files (.cpp)
├── tests/            # Unit tests
├── lib/              # Third-party libraries
└── cmake/            # CMake configuration
```

---

## Comment Structure

### General Guidelines
- Write comments to explain **why**, not **what**
- Keep comments up-to-date with code changes
- Use clear, concise language
- Avoid obvious comments
- Document assumptions and constraints
- Explain complex algorithms

### Single-Line Comments
```javascript
// JavaScript
// TODO: Implement caching mechanism

// C#
// FIXME: Handle edge case when user is null

// Swift
// NOTE: This assumes the API returns sorted data

// C++
// HACK: Temporary workaround for threading issue
```

### Multi-Line Comments

**JavaScript (JSDoc)**
```javascript
/**
 * Calculates the total price including tax
 * @param {number} price - The base price
 * @param {number} taxRate - The tax rate (0.0 to 1.0)
 * @returns {number} The total price with tax
 * @example
 * calculateTotal(100, 0.08) // returns 108
 */
function calculateTotal(price, taxRate) {
    return price * (1 + taxRate);
}
```

**C# (XML Documentation)**
```csharp
/// <summary>
/// Calculates the total price including tax
/// </summary>
/// <param name="price">The base price</param>
/// <param name="taxRate">The tax rate (0.0 to 1.0)</param>
/// <returns>The total price with tax</returns>
/// <exception cref="ArgumentException">Thrown when price is negative</exception>
/// <example>
/// <code>
/// decimal total = CalculateTotal(100m, 0.08m); // returns 108
/// </code>
/// </example>
public decimal CalculateTotal(decimal price, decimal taxRate)
{
    if (price < 0)
        throw new ArgumentException("Price cannot be negative", nameof(price));
    
    return price * (1 + taxRate);
}
```

**Swift (Markup)**
```swift
/// Calculates the total price including tax
///
/// - Parameters:
///   - price: The base price
///   - taxRate: The tax rate (0.0 to 1.0)
/// - Returns: The total price with tax
/// - Throws: `ValidationError.negativePrice` if price is negative
///
/// # Example
/// ```swift
/// let total = calculateTotal(price: 100, taxRate: 0.08) // returns 108
/// ```
func calculateTotal(price: Double, taxRate: Double) throws -> Double {
    guard price >= 0 else {
        throw ValidationError.negativePrice
    }
    return price * (1 + taxRate)
}
```

**C++ (Doxygen)**
```cpp
/**
 * @brief Calculates the total price including tax
 * 
 * @param price The base price
 * @param tax_rate The tax rate (0.0 to 1.0)
 * @return The total price with tax
 * @throws std::invalid_argument if price is negative
 * 
 * @code
 * double total = calculate_total(100.0, 0.08); // returns 108.0
 * @endcode
 */
double calculate_total(double price, double tax_rate) {
    if (price < 0) {
        throw std::invalid_argument("Price cannot be negative");
    }
    return price * (1 + tax_rate);
}
```

### Comment Tags
- `TODO:` Work that needs to be done
- `FIXME:` Known bugs that need fixing
- `HACK:` Temporary workaround
- `NOTE:` Important information
- `OPTIMIZE:` Code that could be optimized
- `REVIEW:` Code that needs review
- `DEPRECATED:` Code marked for removal

---

## Version Control

### Git Commit Messages
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Example:**
```
feat(auth): implement multi-factor authentication

Add MFA support using TOTP-based authentication.
Users can now enable 2FA in their security settings.

Closes #123
```

### Branch Naming
```
<type>/<description>

Examples:
feature/eye-tracking-integration
bugfix/wheelchair-control-latency
hotfix/security-vulnerability
docs/api-documentation
```

---

## Code Review Checklist

- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] New code has appropriate test coverage
- [ ] Comments are clear and necessary
- [ ] No hardcoded credentials or sensitive data
- [ ] Error handling is appropriate
- [ ] Security considerations addressed
- [ ] Performance considerations addressed
- [ ] Documentation updated

---

**Last Updated:** October 3, 2025  
**Version:** 1.0.0

