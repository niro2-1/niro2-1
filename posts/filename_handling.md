# Handling Filenames with Spaces

When working with filenames that contain spaces in the `posts/` directory, ensure to enclose the filename in quotes when referencing it in scripts or commands. For example:

```
cp "posts/my file with spaces.md" destination/
```

This prevents errors that may arise from the shell interpreting the spaces as argument separators.