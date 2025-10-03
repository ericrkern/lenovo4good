# Cursor AI Rules

## Project-Specific Guidelines for Lenovo4Good

This file configures how Cursor AI should assist with development in this project.

---

## Project Context

This is the **Lenovo4Good** project - an Integrated AI Accessibility Platform for the Scott-Morgan Foundation. The platform consolidates various assistive technologies including eye tracking, smart robotic wheelchairs, voice cloning, avatars, and AI assistants.

**Key Focus Areas:**
- Accessibility and inclusive design
- Real-time processing for assistive technologies
- Privacy and security for sensitive user data
- Cross-platform compatibility
- Performance optimization for assistive devices

---

## Code Generation Rules

### General Principles
1. **Accessibility First**: Always consider WCAG guidelines and accessibility best practices
2. **Security**: Follow OWASP Top 10 guidelines (see `.cursor/security.md`)
3. **Privacy**: Handle user data with extreme care; implement data minimization
4. **Performance**: Optimize for real-time responsiveness in assistive features
5. **Documentation**: Provide clear documentation for all public APIs

### Language-Specific Standards
- **JavaScript**: Follow Airbnb style guide, use modern ES6+ features
- **C#**: Follow Microsoft conventions, use async/await patterns
- **Swift**: Follow Swift API design guidelines, use modern Swift features
- **C++**: Follow Google C++ style guide, use modern C++17/20 features

See `.cursor/programming-guide.md` for detailed standards.

---

## AI Assistant Behavior

### When Generating Code
- Always add comprehensive comments for complex logic
- Include error handling and input validation
- Consider edge cases, especially for accessibility features
- Optimize for performance in real-time processing scenarios
- Follow the comment structure defined in programming-guide.md

### When Reviewing Code
- Check for security vulnerabilities (reference security.md)
- Verify accessibility compliance
- Ensure proper error handling
- Validate that coding standards are followed
- Look for potential performance bottlenecks

### When Suggesting Refactoring
- Maintain backward compatibility unless explicitly asked to break it
- Preserve existing functionality
- Improve readability and maintainability
- Consider the impact on assistive technology integrations
- Add tests for refactored code

---

## Accessibility Requirements

### WCAG Compliance
- Target WCAG 2.1 Level AA compliance minimum
- Consider Level AAA for critical user-facing features
- Test with screen readers and assistive technologies
- Ensure keyboard navigation support
- Provide alternative text for all images and media

### Assistive Technology Integration
- Eye tracking requires low-latency processing (<100ms response time)
- Voice cloning must preserve natural speech patterns
- Wheelchair controls need fail-safe mechanisms
- All features must work without mouse/keyboard when possible

---

## Testing Requirements

### Unit Tests
- Minimum 80% code coverage for new code
- Test all edge cases and error conditions
- Mock external dependencies
- Use appropriate testing frameworks:
  - JavaScript: Jest, Mocha, or Vitest
  - C#: xUnit or NUnit
  - Swift: XCTest
  - C++: Google Test

### Integration Tests
- Test assistive technology integrations
- Verify API endpoints
- Test database interactions
- Validate real-time processing pipelines

### Accessibility Tests
- Automated testing with axe-core or similar
- Manual testing with screen readers
- Keyboard navigation testing
- Color contrast validation

---

## Security Requirements

### Data Protection
- Encrypt all sensitive data at rest and in transit
- Implement proper authentication and authorization
- Use secure session management
- Follow data minimization principles
- Implement audit logging for sensitive operations

### Input Validation
- Validate and sanitize all user inputs
- Use parameterized queries to prevent injection attacks
- Implement rate limiting on APIs
- Validate file uploads (type, size, content)

### Dependencies
- Keep all dependencies up to date
- Run security audits regularly (`npm audit`, etc.)
- Review dependency licenses
- Only use dependencies from trusted sources

See `.cursor/security.md` for complete security guidelines.

---

## Documentation Requirements

### Code Documentation
- Document all public APIs using standard comment formats
- Explain complex algorithms and logic
- Include usage examples in comments
- Document assumptions and constraints
- Keep documentation in sync with code

### API Documentation
- Use OpenAPI/Swagger for REST APIs
- Document all endpoints, parameters, and responses
- Include example requests and responses
- Document error codes and handling

### User Documentation
- Provide clear setup instructions
- Include troubleshooting guides
- Document accessibility features
- Provide examples and tutorials

---

## Performance Guidelines

### Real-Time Processing
- Eye tracking: <100ms latency
- Voice processing: <200ms latency
- Wheelchair controls: <50ms latency
- UI updates: 60fps minimum

### Optimization Strategies
- Use appropriate data structures
- Implement caching where appropriate
- Optimize database queries
- Use lazy loading for large datasets
- Profile and benchmark critical paths

---

## Error Handling

### User-Facing Errors
- Provide clear, actionable error messages
- Avoid technical jargon in user messages
- Offer suggestions for resolution
- Log detailed errors internally
- Never expose sensitive information in errors

### System Errors
- Log all errors with appropriate context
- Implement graceful degradation
- Use circuit breakers for external services
- Provide fallback mechanisms for critical features
- Alert on critical failures

---

## Code Review Checklist

Before submitting code, ensure:

- [ ] Follows language-specific style guide
- [ ] Includes appropriate comments
- [ ] Has unit tests with good coverage
- [ ] Passes all existing tests
- [ ] No security vulnerabilities
- [ ] Meets accessibility requirements
- [ ] Performance benchmarks met
- [ ] Documentation updated
- [ ] No hardcoded secrets or credentials
- [ ] Error handling implemented
- [ ] Input validation in place
- [ ] Logging added for important operations

---

## Vibe Programming Integration

This project uses **Vibe Programming** - an AI-driven development approach. When working with AI:

### Best Practices
- Clearly describe the desired functionality
- Provide context about accessibility requirements
- Specify performance constraints
- Mention security considerations
- Request tests along with implementation
- Ask for documentation updates

### Review AI-Generated Code
- Always review AI-generated code carefully
- Test thoroughly, especially for accessibility
- Verify security implications
- Check performance impact
- Ensure coding standards compliance

---

## Git Workflow

### Commit Messages
Follow conventional commits format:
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Branch Naming
```
<type>/<description>

Examples:
feature/eye-tracking-calibration
bugfix/voice-clone-latency
hotfix/security-patch
docs/api-reference
```

### Pull Requests
- Include clear description of changes
- Reference related issues
- Add screenshots for UI changes
- Ensure all checks pass
- Request review from relevant team members

---

## Dependencies Management

### Adding Dependencies
- Evaluate necessity and alternatives
- Check license compatibility
- Review security advisories
- Verify maintenance status
- Document why the dependency is needed

### Updating Dependencies
- Review changelogs
- Test thoroughly after updates
- Update documentation if needed
- Monitor for breaking changes

---

## License and Legal

- Project is open-source (see LICENSE file)
- Ensure all contributions are compatible with project license
- Do not include proprietary or copyrighted code without permission
- Document third-party licenses

---

## Resources

- OWASP Top 10: `.cursor/security.md`
- Coding Standards: `.cursor/programming-guide.md`
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- Project README: `README.md`

---

**Version:** 1.0.0  
**Last Updated:** October 3, 2025

